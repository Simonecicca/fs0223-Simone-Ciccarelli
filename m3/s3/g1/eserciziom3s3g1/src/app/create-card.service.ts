import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateCard } from './create-card';

@Injectable({
  providedIn: 'root'
})
export class CreateCardService {

  apiUrl: string = "https://jsonplaceholder.typicode.com/photos"

  constructor(private http:HttpClient) { }

  get() {
    return this.http.get<CreateCard[]>(this.apiUrl);
  }


}
