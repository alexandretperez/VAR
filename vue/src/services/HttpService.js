import axios from 'axios';

export class HttpService {
    async get(url, config = null) {
        const response = await axios.get(url, config);
        return response.data;
    }
    async put(url, data = null, config = null) {
        const response = await axios.put(url, data, config);
        return response.data;
    }
    async post(url, data = null, config = null) {
        const response = await axios.post(url, data, config);
        return response.data;
    }
    async delete(url, config = null) {
        const response = await axios.delete(url, config);
        return response.data;
    }
}
