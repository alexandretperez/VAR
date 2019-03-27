import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Hero } from 'src/app/models/heroes/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
    selector: 'app-heroes-detail',
    templateUrl: './heroes-detail.component.html',
    styleUrls: ['./heroes-detail.component.styl'],
})
export class HeroesDetailComponent {
    public loading = false;
    @Input() public hero: Hero;

    @Output() public canceled: EventEmitter<any> = new EventEmitter();
    @Output() public deleted: EventEmitter<any> = new EventEmitter();
    @Output() public saved: EventEmitter<Hero> = new EventEmitter<Hero>();

    constructor(private heroService: HeroService) {}

    public async onSave(hero: Hero) {
        this.loading = true;
        const result = await this.heroService.save(hero);
        this.hero = result;
        this.saved.emit(hero);
        this.loading = false;
    }
    public async onDelete(hero: Hero) {
        this.loading = true;
        await this.heroService.delete(hero);
        this.loading = false;
        this.hero = null;
        this.deleted.emit(true);
    }
    public onCancel() {
        this.hero = null;
        this.canceled.emit(true);
    }
}
