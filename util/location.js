const axios = require('axios');
require('dotenv').config();

const HttpError = require('../models/http-error');

const API_KEY = process.env.GEO_CODE_API_KEY;

async function getCoordsForAddress(address) {

  const params = {
    auth: API_KEY,
    locate: address,
    json: '1'
  }
  const response = await axios.get('https://geocode.xyz', {params})
  const data = response.data;
  console.log(response.data);

  if (!data || data.status === 'ZERO_RESULTS') {
    const error = new HttpError(
      'Could not find location for the specified address.',
      422
    );
    throw error;
  }
  const coordinates = {lat: data.longt, lng: data.latt}

  return coordinates;
}

module.exports = getCoordsForAddress;