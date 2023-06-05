import { Title } from "@angular/platform-browser";

export class CreateCard {
  title: string;
  url: string;
  albumId: number;
  id:number = 0
  thumbnailUrl: string;

constructor(title: string, url: string, albumId:number, thumbnailUrl: string, id:number = 0) {
this.title = title;
this.url = url;
this.albumId =  albumId;
this.id = id;
this.thumbnailUrl = thumbnailUrl
}

}
