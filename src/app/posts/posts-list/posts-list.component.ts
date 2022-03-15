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
      postContent: 'First Content'
    },
    {
      postTitle: 'second',
      postContent: 'second Content'
    },
    {
      postTitle: 'third',
      postContent: 'THird Content'
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
