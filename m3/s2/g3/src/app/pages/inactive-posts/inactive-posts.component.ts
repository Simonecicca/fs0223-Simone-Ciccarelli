import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

  postArray: Post[] = [];

  constructor(private postSvc:PostService){}

  ngOnInit(): void {

    let post = this.postSvc.getPosts();

    let postFiltrati = post.filter (p => !p.active);

    this.postArray = postFiltrati
    // this.postSvc.getPosts().then(post => {
    //   this.postArray = post.filter(p => !p.active);
    // })
  }

}
