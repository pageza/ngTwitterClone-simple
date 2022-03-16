import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private _http: HttpClient
  ) { }
  // TODO: Get all the posts of users that the logged in user is following
  getHomePosts() {

  }
  // TODO: Get all posts (exploring) of all users not being followed or of the logged in user
  getExploringPosts() {

  }
  // TODO: Get all posts for logged in user to edit
  getUserPosts() {

  }
  // TODO: Get all posts of one user to view
  getOneUsersPosts() {

  }
  // TODO: Edit one post, guard the route so only the Post Creator can edit it
  editPost() {

  }
  // TODO: Delete one post, guard the route so only the Post Creator can edit it
  deletePost() {

  }
}
