import { Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";

import { ArtistaComponent } from "./components/artista/artista.component";

export const ROUTES: Routes =[
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent},
  { path: 'artist/:id', component: ArtistaComponent },

 // este es para vacios
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  //este es para todos.
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
