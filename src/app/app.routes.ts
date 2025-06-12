import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component'),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component'),
      },
      {
        path: 'portfolio',
        loadComponent: () => import('./pages/portfolio/portfolio.component'),
      },
      {
        path: 'resume',
        loadComponent: () => import('./pages/resume/resume.component'),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
