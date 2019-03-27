import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    OnDestroy,
} from '@angular/core';
import { Hero } from 'src/app/models/heroes/Hero';
import { HeroService } from 'src/app/services/hero.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.styl'],
})
export class HeroesListComponent implements OnInit, OnDestroy {
    public selectedHero: Hero;
    public loading = false;
    public heroes: Hero[];
    public heroAction: Subscription;

    @Output() public selected: EventEmitter<Hero> = new EventEmitter<Hero>();

    constructor(private heroService: HeroService) {}

    public ngOnInit() {
        this.heroAction = this.heroService.action.subscribe(msg => {
            if (msg) {
                this.loadHeroes();
                console.log('Load by heroAction');
            }
        });
        this.loadHeroes();
        console.log('Load by ngOnInit');
    }

    public ngOnDestroy() {
        console.log('Unsubscribe heroAction');
        this.heroAction.unsubscribe();
    }

    public async loadHeroes() {
        this.loading = true;
        const response = await this.heroService.getHeroes();
        response.subscribe(heroes => {
            this.heroes = heroes;
            this.loading = false;
        });
    }

    public onSelect(hero: Hero) {
        this.selectedHero = hero;
        this.selected.emit(hero);
    }
}
