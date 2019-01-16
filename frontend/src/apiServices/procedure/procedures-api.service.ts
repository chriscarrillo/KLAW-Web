import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {API_URL} from '../../app/env';
import {Procedure} from '../../app/dataModels/procedure/procedure.model';

@Injectable()
export class ProceduresApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getProcedures(): Observable<Procedure[]> {
    return this.http
      .get<Procedure[]>(`${API_URL}/procedures`)
      .catch(ProceduresApiService._handleError);
  }
}