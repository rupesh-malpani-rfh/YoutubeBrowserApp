import axios from 'axios';

const KEY = 'AIzaSyD2NLdiu_ruCa2mJz0LkKzQezXYZIQGH00';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});