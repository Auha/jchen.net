import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {LoadPosts} from '~/libs/redux/posts';

@Component({
  selector: 'app-blog-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadPosts());
  }
}
