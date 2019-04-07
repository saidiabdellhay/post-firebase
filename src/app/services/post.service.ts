import { Injectable } from '@angular/core';
import { post } from '../models/posts.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: post[] = [];
  postsSubject = new Subject<post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('posts').set(this.posts);
  }

  getPosts() {
   firebase.database().ref('posts')
   .on('value', (data) => {
      this.posts = data.val() ? data.val(): [];
      this.emitPosts();
     }
   );
  }

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/'+ id).once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        )
      }
    );
  }

  createNewPost(NewPost: post) {
    this.posts.push(NewPost);
    this.savePosts();
    this.emitPosts();
  }

  updateloveIt(NewPost: post) {
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
  
}
