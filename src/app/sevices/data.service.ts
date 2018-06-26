import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
// import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
// @Injectable({
//   providedIn: 'root'
// })
export class DataService {
  constructor(private url: string, private http: Http) {}

  getAll() {
      return this.http.get(this.url)
        .map(responce => responce.json())
        .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
        .map(responce => responce.json())
        .catch(this.handleError);
  }

  update(resource) {
  // using patch used if we are modifing few properties and should be compatible at backend. Used for performance enhansing
    return this.http.patch(this.url + resource.id, JSON.stringify({isRead: true}))
        .map(responce => responce.json())
        .catch(this.handleError);
  }

  delete(resource) {
    return this.http.delete(this.url + resource.id)
        .map(responce => responce.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    return Observable.throw(new AppError(error));
  }
}
