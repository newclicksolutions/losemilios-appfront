import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Basic ' + btoa('IDmWpSGjJiiy2CpKN0m5dgyFzx' + ':' + 'YOUR_API_SECRET'),
  },
});

export default instance;