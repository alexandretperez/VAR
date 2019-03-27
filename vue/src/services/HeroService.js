import { HttpService } from './HttpService';
import { API_ENDPOINT } from '@/configs/api-config';
import { addMessage } from '@/actions/message-actions';

export class HeroService {
    constructor() {
        this.http = new HttpService();
        this.endpoint = API_ENDPOINT + '/heroes';
    }

    async getHeroes() {
        addMessage('Fetching heroes');
        const heroes = await this.http.get(this.endpoint);
        addMessage(`${heroes.length} heroes found.`);
        return heroes;
    }

    async delete(hero) {
        addMessage(`Deleting ${hero.name}...`);
        await this.http.delete(`${this.endpoint}/${hero.id}`);
        addMessage(`${hero.name} was deleted!`);
        return true;
    }

    async save(hero) {
        let result;
        if (hero.id) {
            result = await this.http.put(this.endpoint, hero);
            addMessage(`Hero #${hero.id} was get updated!`);
            return result;
        }

        result = await this.http.post(this.endpoint, hero);
        addMessage(`${hero.name} has joined the team.`);
        return result;
    }
}
