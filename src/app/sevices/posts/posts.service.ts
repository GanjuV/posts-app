import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { POST_SEARCH_API } from '../../app.constants';
@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService {
  constructor(http: Http) {
    super(POST_SEARCH_API, http);
  }
}
