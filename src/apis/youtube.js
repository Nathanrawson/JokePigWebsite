import axios from "axios";

const KEY = 'AIzaSyA3SaLslxnobLKFPPLaEe7mlIxFmq3T72U';

export default axios.create({
baseURL: 'https://www.googleapis.com/youtube/v3',
params: {
    part: 'snippet',
    type: 'video',
    maxResults: 20,
    key: KEY
    }
});

