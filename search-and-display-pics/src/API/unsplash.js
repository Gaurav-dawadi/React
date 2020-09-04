import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:
            'Client-ID 8cN1LMBqjX7rLfnYxdHS-OlzwqdaU_lGBoPjhiISJ7E'
    }
});


