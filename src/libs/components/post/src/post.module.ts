import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxMdModule} from 'ngx-md';

import {PostComponent} from './post.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    NgxMdModule
  ],
  declarations: [PostComponent],
  exports: [PostComponent]

})
export class PostModule {}
