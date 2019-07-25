import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Image } from '../models/Image';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept-Version': 'v1'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BodyService {
  imgUrl: string = 'https://source.unsplash.com';
  // api_key = process.env.ACCESS_KEY;

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>('https://jsonplaceholder.typicode.com/photos')
  }
}
