/**
 * carapi.app — Performance data lookup
 * Uses make/model/year to find trim, then fetches engine specs.
 *
 * Conversions applied automatically:
 *   HP  → KW    : hp × 0.7457
 *   HP  → BHP   : hp × 0.98632
 *   ft-lbs → Nm : ft_lbs × 1.35582
 *   mph → kph   : mph × 1.60934
 *
 * If carapi has no data (EU/UK models not in US database),
 * falls back to UK_SPEC_DB hardcoded values.
 */

const CARAPI_BASE = 'https://carapi.app/api';
const CARAPI_TOKEN = '7704bcfa-a069-4a45-aac8-53380e15c171';
const CARAPI_SECRET = '1bd6cc566f262e53ba09d7ac9c47fbcf';

// ─── UK Spec hardcoded fallback database ─────────────────────────────
// Key format: "MAKE_MODEL_YEAR"  (uppercase, spaces → underscore)
const UK_SPEC_DB: Record<
  string,
  {
    powerKw: string;
    powerBhp: string;
    maxSpeedMph?: string;
    maxSpeedKph?: string;
    maxTorqueNm: string;
    maxTorqueRpm?: string;
    torqueNm: string;
    zeroTo60Mph?: string;
  }
> = {
  BMW_330_2019: {
    powerKw: '215.0',
    powerBhp: '288.3',
    maxSpeedMph: '142',
    maxSpeedKph: '229',
    maxTorqueNm: '420.0',
    maxTorqueRpm: '4000',
    torqueNm: '420.0',
    zeroTo60Mph: '5.9',
  },
  BMW_330E_2019: {
    powerKw: '215.0',
    powerBhp: '288.3',
    maxSpeedMph: '142',
    maxSpeedKph: '229',
    maxTorqueNm: '420.0',
    maxTorqueRpm: '4000',
    torqueNm: '420.0',
    zeroTo60Mph: '5.9',
  },
  // Add more UK/EU models here as needed
};

// ─── JWT cache ───────────────────────────────────────────────────────
let cachedJwt: string | null = null;
let jwtExpiresAt = 0;

async function getJwt(): Promise<string | null> {
  if (cachedJwt && Date.now() < jwtExpiresAt - 60_000) return cachedJwt;

  try {
    const res = await fetch(`${CARAPI_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_token: CARAPI_TOKEN,
        api_secret: CARAPI_SECRET,
      }),
    });

    if (!res.ok) {
      console.log('[CarAPI] Auth failed:', res.status);
      return null;
    }

    const jwt = await res.text();
    cachedJwt = jwt.trim().replace(/^"|"$/g, '');

    try {
      const payload = JSON.parse(
        Buffer.from(cachedJwt.split('.')[1], 'base64').toString(),
      );
      jwtExpiresAt = (payload.exp ?? 0) * 1000;
    } catch {
      jwtExpiresAt = Date.now() + 3_600_000;
    }

    console.log('[CarAPI] Auth success');
    return cachedJwt;
  } catch (err) {
    console.log('[CarAPI] Auth error:', err);
    return null;
  }
}

// ─── Conversion helpers ───────────────────────────────────────────────

/** SAE HP → kW  (1 hp = 0.7457 kW) */
function hpToKw(hp: number): string {
  return (hp * 0.7457).toFixed(1);
}

/** SAE HP → metric BHP  (1 hp = 0.98632 PS/BHP) */
function hpToBhp(hp: number): string {
  return (hp * 0.98632).toFixed(1);
}

/** lb·ft → N·m  (1 lb·ft = 1.35582 N·m) */
function ftLbsToNm(ftLbs: number): string {
  return (ftLbs * 1.35582).toFixed(1);
}

/** mph → kph  (1 mph = 1.60934 km/h) */
function mphToKph(mph: number): string {
  return (mph * 1.60934).toFixed(0);
}

// ─── DB key builder ───────────────────────────────────────────────────
function buildDbKey(make: string, model: string, year: number): string {
  return `${make}_${model}_${year}`.toUpperCase().replace(/\s+/g, '_');
}

// ─── Result type ──────────────────────────────────────────────────────
export interface CarapiPerformanceResult {
  powerKw?: string;
  powerBhp?: string;
  maxSpeedMph?: string;
  maxSpeedKph?: string;
  maxTorqueNm?: string;
  maxTorqueRpm?: string;
  zeroTo60Mph?: string;
  peakPower?: string;
  torqueNm?: string;
  torqueFtLb?: string;
  peakTorque?: string;
}

// ─── Main export ──────────────────────────────────────────────────────

/**
 * Fetch performance data for a vehicle.
 *
 * Priority:
 *   1. carapi.app live lookup  (US database — works for many makes/models)
 *   2. UK_SPEC_DB hardcoded fallback  (EU/UK models not in carapi)
 *
 * @param make  e.g. "BMW"
 * @param model e.g. "330" | "330e" | "330i"
 * @param year  e.g. 2019
 */
export async function fetchCarapiPerformance(
  make: string,
  model: string,
  year: number,
): Promise<CarapiPerformanceResult | null> {
  // ── 1. Try carapi live lookup ────────────────────────────────────
  const liveResult = await tryCarapiLookup(make, model, year);
  if (liveResult) {
    console.log('[CarAPI] Using live carapi data');
    return liveResult;
  }

  // ── 2. Fallback: UK_SPEC_DB ──────────────────────────────────────
  // Try several key variants: exact model, without suffix, digits only
  const modelVariants = [
    model,
    model.replace(/[ei]$/i, ''), // "330e" → "330"
    model.replace(/[^0-9]/g, ''), // "330e" → "330"
  ].filter((m, i, arr) => m && arr.indexOf(m) === i);

  for (const mv of modelVariants) {
    const key = buildDbKey(make, mv, year);
    if (UK_SPEC_DB[key]) {
      console.log(`[CarAPI] UK_SPEC_DB hit: ${key}`);
      const d = UK_SPEC_DB[key];
      return {
        powerKw: d.powerKw,
        powerBhp: d.powerBhp,
        maxSpeedMph: d.maxSpeedMph,
        maxSpeedKph: d.maxSpeedKph,
        maxTorqueNm: d.maxTorqueNm,
        maxTorqueRpm: d.maxTorqueRpm,
        torqueNm: d.torqueNm,
        zeroTo60Mph: d.zeroTo60Mph,
      };
    }
  }

  console.log(
    `[CarAPI] No performance data found for ${make} ${model} ${year}`,
  );
  return null;
}

// ─── carapi live lookup ───────────────────────────────────────────────

async function tryCarapiLookup(
  make: string,
  model: string,
  year: number,
): Promise<CarapiPerformanceResult | null> {
  const jwt = await getJwt();
  if (!jwt) return null;

  const headers = {
    Authorization: `Bearer ${jwt}`,
    'Content-Type': 'application/json',
  };

  // Try multiple model name variants
  const modelsToTry = [
    model,
    model.replace(/[ei]$/i, ''),
    model.replace(/[^0-9]/g, ''),
  ].filter((m, i, arr) => m && arr.indexOf(m) === i);

  let trimId: number | null = null;

  for (const m of modelsToTry) {
    try {
      const url =
        `${CARAPI_BASE}/trims/v2` +
        `?year=${year}` +
        `&make=${encodeURIComponent(make)}` +
        `&model=${encodeURIComponent(m)}` +
        `&verbose=yes`;

      console.log(`[CarAPI] Trim search: ${make} ${m} ${year}`);
      const res = await fetch(url, { headers });
      if (!res.ok) continue;

      const json = await res.json();
      const trims: any[] = json?.data ?? [];

      if (trims.length > 0) {
        const exact = trims.find(
          (t) => t.model?.toLowerCase() === m.toLowerCase(),
        );
        trimId = (exact ?? trims[0]).id;
        console.log(`[CarAPI] Found trim_id=${trimId}`);
        break;
      }
    } catch (err) {
      console.log(`[CarAPI] Trim error for ${m}:`, err);
    }
  }

  if (!trimId) return null;

  // Fetch engine data
  let engineData: any = null;
  try {
    const url = `${CARAPI_BASE}/engines/v2?trim_id=${trimId}&verbose=yes`;
    const res = await fetch(url, { headers });
    if (!res.ok) return null;
    const json = await res.json();
    engineData = json?.data?.[0] ?? null;
  } catch (err) {
    console.log('[CarAPI] Engine fetch error:', err);
    return null;
  }

  if (!engineData) return null;

  // ── Map carapi fields → CarTaxPerformance with unit conversions ──
  const hp: number | null = engineData.horsepower_hp ?? null;
  const ftLbs: number | null = engineData.torque_ft_lbs ?? null;
  const torqRpm: number | null = engineData.torque_rpm ?? null;
  const hpRpm: number | null = engineData.horsepower_rpm ?? null;

  const result: CarapiPerformanceResult = {};

  if (hp != null) {
    // HP → kW  and  HP → BHP
    result.powerKw = hpToKw(hp);
    result.powerBhp = hpToBhp(hp);
    result.peakPower = hpRpm ? String(hpRpm) : undefined;
  }

  if (ftLbs != null) {
    // ft-lbs → Nm
    result.maxTorqueNm = ftLbsToNm(ftLbs);
    result.torqueNm = ftLbsToNm(ftLbs);
    result.torqueFtLb = String(ftLbs);
  }

  if (torqRpm != null) {
    result.maxTorqueRpm = String(torqRpm);
    result.peakTorque = String(torqRpm);
  }

  console.log('[CarAPI] Live result:', JSON.stringify(result));
  return Object.keys(result).length > 0 ? result : null;
}
