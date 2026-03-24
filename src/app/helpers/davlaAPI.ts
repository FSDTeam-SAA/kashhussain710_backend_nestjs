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
}

const DVLA_URL =
  'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles';

export const freeDvlaApi = async (
  carNumber: string,
): Promise<VehicleResponse> => {
  const vrn = carNumber.replace(/\s/g, '').toUpperCase();

  const response = await fetch(DVLA_URL, {
    method: 'POST',
    headers: {
      'x-api-key': config.devla.freeDevialKey!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ registrationNumber: vrn }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.errors?.[0]?.detail ?? `HTTP ${response.status}`);
  }

  return response.json() as Promise<VehicleResponse>;
};
