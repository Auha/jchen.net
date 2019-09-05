import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';

import {IndexComponent} from './pages/index/index.component';
import {routing} from './blog.routing';
import {PostModule} from '~/libs/components/post';
import {PostReduxModule} from '~/libs/redux/posts';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    MatCardModule,
    FlexLayoutModule,
    PostModule,
    PostReduxModule,
    routing
  ]
})
export class BlogModule {}
