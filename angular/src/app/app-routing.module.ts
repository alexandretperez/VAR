import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { TelevisionComponent } from './components/television/television.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: 'heroes', component: HeroesComponent },
            { path: '', redirectTo: 'heroes', pathMatch: 'full' },
            { path: 'tv', component: TelevisionComponent },
            { path: 'about', component: AboutComponent },
        ],
    },
    { path: '**', redirectTo: 'heroes', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
