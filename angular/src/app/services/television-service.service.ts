import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class TelevisionService {
    private url = 'http://api.tvmaze.com/search/shows?q=';
    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) {}

    public getShows(query: string): Observable<any> {
        this.messageService.add(`Fetching movies or shows by "${query}"`);
        return this.http.get(this.url + query);
    }
}
