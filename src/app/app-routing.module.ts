import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TableLeagueStatsComponent } from './components/table-league-stats/table-league-stats.component';
import { LoginComponent } from './components/login/login.component';
import { SinginComponent } from './components/singin/singin.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'singin', component: SinginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'league/:id', component: TableLeagueStatsComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
