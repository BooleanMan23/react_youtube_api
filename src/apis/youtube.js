import axios from 'axios';

const KEY = 'AIzaSyB7J0RfXEN1kkzlqIVeg-BhIUpFD0sEHv0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
