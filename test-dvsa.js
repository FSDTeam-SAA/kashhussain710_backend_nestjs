const config = {
  clientId: 'c9c521fa-ba63-4b59-807d-8ab0e38aba54',
  clientSecret: 'bph8Q~Y5QehfzdpBFs0d1FGq4zfWFH1DoTdHTcQB',
  tokenUrl:
    'https://login.microsoftonline.com/a455b827-244f-4c97-b5b4-ce5d13b4d00c/oauth2/v2.0/token',
  scope: 'https://tapi.dvsa.gov.uk/.default',
  apiKey: 'vR87CmEnRB5SLxQc9b0462jmYUE0L3ZK9Jz4dRsC',
  apiUrl: 'https://history.mot.api.gov.uk/v1/trade/vehicles/registration/',
};

async function testDVSA() {
  console.log('1. Getting access token...');
  try {
    const tokenResponse = await fetch(config.tokenUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: config.clientId,
        client_secret: config.clientSecret,
        scope: config.scope,
      }),
    });

    console.log('Token Response Status:', tokenResponse.status);
    const tokenData = await tokenResponse.json();
    console.log('Token Response:', JSON.stringify(tokenData, null, 2));

    if (!tokenData.access_token) {
      console.error('No access token received!');
      return;
    }

    console.log('\n2. Getting MOT history for PJ57KVO...');
    const motResponse = await fetch(`${config.apiUrl}PJ57KVO`, {
      method: 'GET',
      headers: {
        Accept: 'application/json+v6',
        'X-API-Key': config.apiKey,
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });

    console.log('MOT Response Status:', motResponse.status);
    const motData = await motResponse.text();
    console.log('MOT Response Body:', motData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testDVSA();
