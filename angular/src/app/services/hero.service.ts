import { Injectable } from '@angular/core';
import { Hero } from '../models/heroes/Hero';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from '../configs/api-config';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    private endpoint: string;
    public action: Subject<string> = new Subject();

    constructor(
        private messageService: MessageService,
        private http: HttpClient
    ) {
        this.endpoint = API_ENDPOINT + '/heroes';
    }

    public async getHeroes(): Promise<Observable<Hero[]>> {
        this.messageService.add('Fetching heroes');
        const heroes = await this.http.get(this.endpoint);
        heroes.subscribe((values: Hero[]) => {
            this.messageService.add(`${values.length} heroes found.`);
        });
        return heroes as Observable<Hero[]>;
    }

    public async delete(hero: Hero) {
        this.messageService.add(`Deleting ${hero.name}...`);
        await this.http.delete(`${this.endpoint}/${hero.id}`).subscribe();
        this.messageService.add(`${hero.name} was deleted!`);
        this.action.next('deleted');
    }

    public async save(hero: Hero): Promise<Hero> {
        let result: Promise<Hero> = null;
        if (hero.id) {
            result = (await this.http
                .put(this.endpoint, hero)
                .toPromise()) as Promise<Hero>;

            this.messageService.add(`Hero #${hero.id} was get updated!`);
            this.action.next('updated');

            return result;
        }

        result = (await this.http
            .post(this.endpoint, hero)
            .toPromise()) as Promise<Hero>;

        this.messageService.add(`${hero.name} has joined the team.`);
        this.action.next('added');

        return result;
    }
}
