import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
        children: [
            {
                path: 'characters',
                loadComponent: () => import('./components/characters-page/characters-page.component').then(c => c.CharactersPageComponent)
            },
            {
                path: 'logs',
                loadComponent: () => import('./components/logs-table/logs-table.component').then(c => c.LogsTableComponent)
            }
        ]
    },
    {
        path: "**",
        redirectTo: 'home'
    }
];
