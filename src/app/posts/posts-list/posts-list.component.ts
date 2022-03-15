import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts = [
    {
      postTitle: 'First',
      postContent: 'First Content going to add much more to this to see how much more space the different length content'
    },
    {
      postTitle: 'second',
      postContent: 'second Content'
    },
    {
      postTitle: 'third',
      postContent: 'Third Content'
    },
    {
      postTitle: 'Fourth',
      postContent: 'Fourth Content'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
