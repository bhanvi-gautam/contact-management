import axios from 'axios';

const baseURL = 'https://disease.sh/v3/covid-19';

export const covidAPI = axios.create({
  baseURL,
});

export const fetchWorldwideData = () => covidAPI.get('/all');
export const fetchCountryData = () => covidAPI.get('/countries');
export const fetchGraphData = () => covidAPI.get('/historical/all?lastdays=all');
