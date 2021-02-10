import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID GFYwodkA_N7ENC3dJEHubJpWaGrNbHTQVr5zuW3Ci_4',
        'Access-Control-Allow-Origin':'http://localhost:3000' 
  }
});