import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService {
  static ngInjectableDef = undefined;
  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts/', http);
  }
}
