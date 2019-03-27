import { HttpService } from './HttpService';
import { API_ENDPOINT } from '../configs/api-config';
import { addMessage } from '../actions/message-actions';
import store from '../store';

export class HeroService {
    constructor() {
        this.http = new HttpService();
        this.endpoint = API_ENDPOINT + '/heroes';
    }

    async getHeroes() {
        addMessage(store.dispatch, 'Fetching heroes');
        const heroes = await this.http.get(this.endpoint);
        addMessage(store.dispatch, `${heroes.length} heroes found.`);
        return heroes;
    }

    async delete(hero) {
        addMessage(store.dispatch, `Deleting ${hero.name}...`);
        await this.http.delete(`${this.endpoint}/${hero.id}`);
        addMessage(store.dispatch, `${hero.name} was deleted!`);
    }

    async save(hero) {
        let result;
        if (hero.id) {
            result = await this.http.put(this.endpoint, hero);
            addMessage(store.dispatch, `Hero #${hero.id} was get updated!`);
            return result;
        }

        result = await this.http.post(this.endpoint, hero);
        addMessage(store.dispatch, `${hero.name} has joined the team.`);
        return result;
    }
}
