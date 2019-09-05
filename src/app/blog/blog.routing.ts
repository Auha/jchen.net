import {Routes, RouterModule} from '@angular/router';

import {IndexComponent} from './pages/index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent}
];

export const routing = RouterModule.forChild(routes);
