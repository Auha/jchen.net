import {Component, OnInit} from '@angular/core';
import * as fm from 'front-matter';
// import blog from 'raw-loader!@content/blog.md';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']

})
export class PostComponent implements OnInit {
  post = {};

  constructor() {}

  ngOnInit() {
    // this.post = fm(blog);
  }


}
