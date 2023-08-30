import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

/* Prime NG */
import { ButtonModule } from 'primeng/button';
import { NavComponent } from './components/nav/nav.component';
import { TableModule } from 'primeng/table';
import { TableLeagueStatsComponent } from './components/table-league-stats/table-league-stats.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TableLeagueStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
