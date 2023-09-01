import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SinginComponent } from './components/singin/singin.component';
import { NavComponent } from './components/nav/nav.component';
import { TableLeagueStatsComponent } from './components/table-league-stats/table-league-stats.component';

/* Prime NG */
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TableLeagueStatsComponent,
    LoginComponent,
    SinginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    CardModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
