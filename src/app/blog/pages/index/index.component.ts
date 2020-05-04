import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {LoadPosts} from '~/libs/redux/posts';
import {ScullyRoutesService} from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(
    private store: Store,
    private scully: ScullyRoutesService
  ) {}

  ngOnInit() {
    this.store.dispatch(new LoadPosts());
  }
}
