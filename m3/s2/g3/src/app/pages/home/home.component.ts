import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {







  changeColor(type:string){

    let color = '';

    color = type == 'news' ? 'yellow' : '';
    color = type == 'politics' ? 'black' : '';
    color = type == 'education' ? 'blue' : '';

    return '';
  }

}
