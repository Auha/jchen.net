import {Component, OnInit} from '@angular/core';
import * as fm from 'front-matter';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post = {};

  constructor() {}

  ngOnInit() {
    console.log(this.post);
  }


}
