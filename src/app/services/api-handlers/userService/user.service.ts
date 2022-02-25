/**
 * Created by Iruobe Akhigbe Ayomide
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

  /*auth(data: any): Observable<IResponse> {
    return this.api.postRequest('authenticate', 'login' , data).map((res: IResponse)  => {
      return res ;
    });
  }*/

  logout(): Observable<IResponse> {
    return this.api.getRequest('auth', 'logout').pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }

  signUp(data: any): Observable<IResponse> {
    return this.api.postRequest('sign-up', null , data).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }

  verifyPassword(data: any): Observable<IResponse> {
    return this.api.postRequest('verify-password', null , data).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }

  verifyAccount(data: any): Observable<IResponse> {
    return this.api.postRequest('Auth', 'ConfirmEmail' , data).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }

  emailSubscribe(data: any): Observable<IResponse> {
    return this.api.postRequest('ConfirmEmail', null , data).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }

  docUpload(data: any): Observable<IResponse> {
    return this.api.postRequest('Auth', 'SchoolRegistration', data).pipe(
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

  getLocations(): Observable<IResponse> {
    return this.api.getRequest('users', '').pipe( map((res: any) => {
        return res;
      })
    );
  }

  getSchools(): Observable<IResponse> {
    return this.api.getRequest('users', '').pipe( map((res: any) => {
        return res;
      })
    );
  }

  /* getSchools(): Observable<IResponse> {
    return this.api.getRequest('School', 'GetAll').pipe( map((res: any) => {
        return res;
      })
    );
  } */

  getClients(): Observable<IResponse> {
    return this.api.getRequest('admin', 'client').pipe(
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
  updateClient(data: object, id: string): Observable<IResponse> {
    return this.api.putRequest('admin', 'client/' + id, data).pipe(
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

  createClientType(data: object): Observable<IResponse> {
    return this.api.postRequest('admin', 'client_type', data).pipe(
      map((res: IResponse) => {
        return res;
      })
    );
  }

  updateClientType(data: object, id: string): Observable<IResponse> {
    return this.api.putRequest('admin', 'client_type/' + id, data).pipe(
      map((res: any) => {
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
