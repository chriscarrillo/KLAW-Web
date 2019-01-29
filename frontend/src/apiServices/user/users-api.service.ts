import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {API_URL} from '../../app/env';
import {User} from '../../app/dataModels/user/user.model';
import { DataService } from 'src/app/services/data.service';

interface isLoggedIn {
  success: boolean
}

@Injectable()
export class UsersApiService {

  ROOT_URL: string; // Local ROOT_URL

  constructor(private data: DataService, private http: HttpClient) {
    this.data.currentRootUrl.subscribe(ROOT_URL => this.ROOT_URL = ROOT_URL);
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.post<isLoggedIn>(this.ROOT_URL + '/isLoggedIn', { id: 4 });
  }

  logout() {
    return this.http.get(this.ROOT_URL + '/logout');
  }
}