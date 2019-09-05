import {NgModule} from '@angular/core';
import {NgxsModule} from '@ngxs/store';

import {PostsState} from './posts.state';

@NgModule({
  imports: [
    NgxsModule.forFeature([PostsState])
  ]

})
export class PostReduxModule {}
