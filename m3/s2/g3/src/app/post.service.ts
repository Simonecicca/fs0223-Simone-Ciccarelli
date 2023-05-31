import { Injectable } from '@angular/core';
import { Post } from './Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  [x: string]: any;

  private posts:Post [] = [
    {
      "id": 1,
      "title": "lorem ipsum1",
      "active": true,
      "type": "news"
    },
    {
      "id": 2,
      "title": "lorem ipsum2",
      "active": false,
      "type": "politics"
    },
    {
      "id": 3,
      "title": "lorem ipsum3",
      "active": false,
      "type": "education"
    },
    {
      "id": 4,
      "title": "lorem ipsum4",
      "active": true,
      "type": "news"
    }
  ]


  apiUrl: string = 'assets/db.json';

  constructor() { }

  getPosts():Promise<Post[]>{
    return fetch(this.apiUrl).then(response => response.json());

  //   if(activeInactive){
  //     return this.postArray.filter( (p: Post) => p.active);
  //   }else {
  //     return this.postArray.filter( (p: Post) => !p.active);
  //   }
  // }
}

getPostByStatus(status:boolean):Post[] {
  return this.posts.filter(p => p.active == status)
}


toggleStatus(post:Post){
post.active = !post.active;

let index = this.posts.findIndex(p => p.id == post.id)
this.posts.splice(index, 1, post);
}
