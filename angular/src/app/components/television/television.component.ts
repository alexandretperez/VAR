import { Component } from '@angular/core';
import { TelevisionService } from 'src/app/services/television-service.service';

@Component({
    selector: 'app-television',
    templateUrl: './television.component.html',
    styleUrls: ['./television.component.styl'],
})
export class TelevisionComponent {
    public query = '';
    public shows = [];
    public loading = false;

    constructor(private televisionService: TelevisionService) {}

    public onSearch() {
        this.loading = true;
        this.televisionService.getShows(this.query).subscribe(value => {
            this.loading = false;
            this.shows = value.map((p: { show: any }) => p.show);
        });
    }
}
