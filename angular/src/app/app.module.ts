import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeroesDetailComponent } from './components/heroes-detail/heroes-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { TelevisionComponent } from './components/television/television.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        MainLayoutComponent,
        HeroesDetailComponent,
        MessagesComponent,
        TelevisionComponent,
        AboutComponent,
        HeroesListComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
