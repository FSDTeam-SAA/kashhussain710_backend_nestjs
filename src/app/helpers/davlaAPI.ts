import {
  BadGatewayException,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import config from '../config';

export interface VehicleResponse {
  registrationNumber: string;
  taxStatus: string;
  taxDueDate: string;
  motStatus: string;
  motExpiryDate?: string;
  make: string;
  colour: string;
  fuelType: string;
  yearOfManufacture: number;
  engineCapacity: number;
  co2Emissions: number;
  monthOfFirstRegistration: string;
  markedForExport: boolean;
  dateOfLastV5CIssued: string;
  euroStatus?: string;
  wheelplan?: string;
}

// ─── shared fetch logic ──────────────────────────────────────────────
async function callDvla(
  registrationNumber: string,
  apiKey: string,
  keyType: 'free' | 'paid',
): Promise<VehicleResponse> {
  const vrn = registrationNumber.replace(/\s/g, '').toUpperCase();
  const normalizedApiKey = apiKey.trim();

  let response: Response;
  try {
    response = await fetch(config.devla.baseUrl, {
      method: 'POST',
      headers: {
        'x-api-key': normalizedApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ registrationNumber: vrn }),
    });
  } catch {
    throw new ServiceUnavailableException('Unable to connect to DVLA service');
  }

  if (!response.ok) {
    let errorMessage = `DVLA request failed: ${response.status}`;
    let rawBody = '';
    try {
      rawBody = await response.text();
      if (rawBody) {
        try {
          const err = JSON.parse(rawBody);
          errorMessage = err?.errors?.[0]?.detail ?? err?.message ?? errorMessage;
        } catch {
          errorMessage = rawBody.substring(0, 300);
        }
      }
    } catch {
      // ignore read error, use default message
    }

    // Log full details for debugging
    const keyPreview = normalizedApiKey
      ? `${normalizedApiKey.substring(0, 6)}...${normalizedApiKey.substring(normalizedApiKey.length - 4)}`
      : 'MISSING';
    console.error(
      `[DVLA] FAILED — Type: ${keyType}, Status: ${response.status}, Key: ${keyPreview}, VRM: ${vrn}`,
    );
    console.error(`[DVLA] Response body: ${rawBody.substring(0, 500)}`);
    console.error(
      `[DVLA] Key length: ${normalizedApiKey?.length}, Original length: ${apiKey?.length}, Key has \\r: ${apiKey?.includes('\r')}, Key has spaces: ${apiKey?.includes(' ')}`,
    );

    if (response.status === 400) throw new BadRequestException(errorMessage);
    if (response.status === 404) throw new NotFoundException(errorMessage);
    if (response.status === 401 || response.status === 403)
      throw new BadGatewayException(
        `DVLA ${keyType} API authentication failed (${response.status}): ${errorMessage}`,
      );

    throw new BadGatewayException(errorMessage);
  }

  return response.json() as Promise<VehicleResponse>;
}

// ─── FREE DVLA ───────────────────────────────────────────────────────
export async function freeDVLACarCheck(
  registrationNumber: string,
): Promise<VehicleResponse> {
  const apiKey = config.devla.freeDevialKey;
  if (!apiKey)
    throw new InternalServerErrorException('FREE DVLA API key missing');
  return callDvla(registrationNumber, apiKey, 'free');
}

// ─── PAID DVLA ───────────────────────────────────────────────────────
export async function paidDVLACarCheck(
  registrationNumber: string,
): Promise<VehicleResponse> {
  const apiKey = config.devla.paidDevialKey;
  if (!apiKey)
    throw new InternalServerErrorException('PAID DVLA API key missing');
  return callDvla(registrationNumber, apiKey, 'paid');
}

// ─── backward compat (পুরনো import ভাঙবে না) ────────────────────────
export const freeDvlaApi = freeDVLACarCheck;
