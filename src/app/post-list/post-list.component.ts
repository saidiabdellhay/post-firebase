import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { post } from '../models/posts.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  
  post: post[];
  postsSubscription: Subscription;
  
  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: post[]) => {
        this.post = posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPosts();
  }

  onNewPost() {
    this.router.navigate(['/posts','new']);
  }

  

  onViewPost(id: number) {
    this.router.navigate(['/posts','view', id]);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
