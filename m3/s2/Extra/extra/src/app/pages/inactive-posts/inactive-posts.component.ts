import { Component } from '@angular/core';
import { Post } from 'src/app/module/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {

  ArrayActivePost: Post[] = [];

  constructor(private PostSvc: PostService) {

    this.ArrayActivePost = this.PostSvc.getPosts(false)
    
  }

}
