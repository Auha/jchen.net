import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
