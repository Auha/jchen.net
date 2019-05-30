import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import {IndexComponent} from './pages/index/index.component';
import {routing} from './blog.routing';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    MatCardModule,
    routing
  ]
})
export class BlogModule {}
