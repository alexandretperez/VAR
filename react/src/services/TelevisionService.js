import { HttpService } from './HttpService';
import { addMessage } from '../actions/message-actions';
import store from '../store';

const url = 'http://api.tvmaze.com/search/shows?q=';
const http = new HttpService();

export class TelevisionService {
    getShows(query) {
        addMessage(store.dispatch, `Fetching movies or shows by "${query}"`);
        return http.get(url + query);
    }
}

export default TelevisionService;
