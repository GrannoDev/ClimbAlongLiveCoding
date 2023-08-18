import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'competitions',
    loadComponent: () =>
      import('./competitions/competitions.component').then(
        (c) => c.CompetitionsComponent
      ),
  },
  {
    path: 'competitions/:id',
    loadComponent: () =>
      import(
        './competitions/competition-detail/competition-detail.component'
      ).then((c) => c.CompetitionDetailComponent),
  },
];
