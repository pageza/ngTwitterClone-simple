import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {PostsService} from "../../_services/posts.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postForm = new FormGroup({
    postTitle: new FormControl(''),
    postContent: new FormControl(''),
    postImage: new FormControl('')
  })
  constructor(
    private _router: Router,
    private _posts: PostsService
  ) { }

  ngOnInit(): void {
  }

  onSubmitPost(): void {
    console.log(this.postForm.value)
  }
}
