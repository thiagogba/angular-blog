import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'content/:id', component: ContentComponent },
  { path: 'title', component: TitleComponent },
  { path: 'title/portfolio', component: CardComponent, children: [
    { path: ':id', component: CardComponent },
    { path: ':id/:token', component: CardComponent },
  ] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
