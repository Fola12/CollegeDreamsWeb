/**
 * Created by Arokoyu Olalekan Ojo
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IResponse} from '../../../interfaces/iresponse';
import {ApiService} from '../../api/api.service';
import {map} from 'rxjs/operators';
@Injectable()
export class UserService {

  constructor(private api: ApiService) {

  }

  auth(data: any): Observable<IResponse> {
    return this.api.postRequest('auth', 'login' , data).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }
  logout(): Observable<IResponse> {
    return this.api.getRequest('auth', 'logout').pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }
  forgotPassword(data: any): Observable<IResponse> {
    return this.api.postRequest('forgot-password', null , data).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }
  resetPassword(data: any): Observable<IResponse> {
    return this.api.postRequest('forgot-password', 'reset' , data).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }
  changePassword(data: any): Observable<IResponse> {
    return this.api.postRequest('change-password', null , data).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }
  getClientTypes(): Observable<IResponse> {
    return this.api.getRequest('admin', 'client_type').pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }
  getClients(): Observable<IResponse> {
    return this.api.getRequest('admin', 'client').pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }
  createClientType(data: object): Observable<IResponse> {
    return this.api.postRequest('admin', 'client_type', data).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }
  createClient(data: object): Observable<IResponse> {
    return this.api.postRequest('admin', 'client', data).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }
  updateClientType(data: object, id: string): Observable<IResponse> {
    return this.api.putRequest('admin', 'client_type/' + id, data).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }
  updateClient(data: object, id: string): Observable<IResponse> {
    return this.api.putRequest('admin', 'client/' + id, data).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }
  deleteClientType(id: string): Observable<IResponse> {
    return this.api.deleteRequest('admin', 'client_type/' + id).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }
  deleteClient(id: string): Observable<IResponse> {
    return this.api.deleteRequest('admin', 'client/' + id).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }
 }