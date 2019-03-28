import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'puro-malte', loadChildren: './puro-malte/puro-malte.module#PuroMaltePageModule' },
  { path: 'pilsen', loadChildren: './pilsen/pilsen.module#PilsenPageModule' },
  { path: 'kolsh', loadChildren: './kolsh/kolsh.module#KolshPageModule' },
  { path: 'heineken', loadChildren: './heineken/heineken.module#HeinekenPageModule' },
  { path: 'cerveja-detalhes', loadChildren: './cerveja-detalhes/cerveja-detalhes.module#CervejaDetalhesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
