import { Component } from '@angular/core';
import { Post } from 'src/app/module/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {

  ArrayActivePost: Post[] = [];

  constructor(private PostSvc: PostService) {

    this.ArrayActivePost = this.PostSvc.getPosts(true)
    
  }

}
