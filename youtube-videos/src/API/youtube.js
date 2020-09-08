import axios from 'axios';

const KEY = 'AIzaSyAqz-OneTn9jeDvvSJ003UZ3i7INu_kkoY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})