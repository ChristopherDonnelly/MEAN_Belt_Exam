import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
