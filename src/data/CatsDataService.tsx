import axios from "axios";

const CatsDataService = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/breeds',
    method:'GET'
});

export default CatsDataService;