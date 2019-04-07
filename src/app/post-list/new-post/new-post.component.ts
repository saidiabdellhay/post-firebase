import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { post } from 'src/app/models/posts.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})

export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      loveIts: ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const loveIts = this.postForm.get('loveIts').value;
    const date = new Date();
    const newPost = new post(title, content, loveIts, date);
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
