import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
  path:'home',
  component:HomeComponent
 },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
