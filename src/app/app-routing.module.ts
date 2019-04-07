import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourOnFourComponent } from './four-on-four/four-on-four.component';

import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './post-list/new-post/new-post.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'post/new', component: NewPostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'not-found', component: FourOnFourComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
