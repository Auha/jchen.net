import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './blog/blog.module#BlogModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);