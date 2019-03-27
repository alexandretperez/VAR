import { Component } from '@angular/core';
import { Hero } from 'src/app/models/heroes/Hero';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.styl'],
})
export class HeroesComponent {
    public selectedHero: Hero;

    public onAdd() {
        this.selectedHero = { id: null, name: '' };
    }

    public onSelected(hero: Hero) {
        this.selectedHero = { ...hero };
    }

    public onSaved(hero: Hero) {
        console.log('Hero saved!', hero);
    }

    public onDeleted() {
        console.log('Hero deleted!');
        this.selectedHero = null;
    }

    public onCanceled() {
        console.log('Changes canceled!');
        this.selectedHero = null;
    }
}
