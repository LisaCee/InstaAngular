import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Image } from '../models/Image';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BodyService {

  imgUrl: string = 'https://picsum.photos/v2/list';
  avatarUrl: string = 'https://randomuser.me/api/?results=30';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.imgUrl}`, httpOptions)
  }
  getAvatar(): Observable<any> {
    return this.http.get<any>(`${this.avatarUrl}`)
  }
}
