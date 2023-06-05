import { Component, OnInit } from '@angular/core';
import { CreateCard } from 'src/app/create-card';
import { CreateCardService } from 'src/app/create-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 cardArray: CreateCard[] = [];

 likeArray: CreateCard[] = [];

 constructor(private likeSvc:CreateCardService) {}

 push(card: CreateCard): void {
  this.likeArray.push(card);
 }

 ngOnInit(): void {
  this.likeSvc.get().subscribe(res => {
    this.cardArray = res;
    this.cardArray = res.filter(card => card.id <= 30)
  })
 }
}
