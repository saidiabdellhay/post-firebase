import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { post } from 'src/app/models/posts.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() posts: string;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIt: number;
  @Input() postCreatedAt: Date;

  constructor(
    private postsService: PostService
  ) { }

  ngOnInit() {
  }

  getColor() {
    if(this.postLoveIt > 0){
      return 'green'; 
    } else if (this.postLoveIt < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  getLoveIt() {
    if(this.postLoveIt > 0){
      return true; 
    }
  }
  getDontLoveIt() {
    if(this.postLoveIt < 0){
      return true; 
    }
  }

  onLoveIt(post: post) {
    post.loveIts = 1;
    this.postsService.updateloveIt(post);
  }

  onDontLoveIt(post: post) {
    post.loveIts = -1;
    this.postsService.updateloveIt(post);
  }

  onDeletePost(post: post) {
    this.postsService.removePost(post);
  }

}
