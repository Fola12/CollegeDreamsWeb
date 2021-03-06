/**
 *
 * Created By Iruobe Akhigbe Ayomide <iruobeakhigbe@gmail.com> @ 18/08/2021
 *
 */
import {Injectable} from '@angular/core';
import {CacheService} from '../cacheService/cache.service';
import { environment as ENV } from '../../../environments/environment';
import {UserService} from '../api-handlers/userService/user.service';

@Injectable()
export class AuthService {
  constructor(private cacheService: CacheService, private userService: UserService) {
  }

  public getUserToken() {
    return this.cacheService.getSession(ENV.TOKEN);
  }
  public getUserDetails() {
    return this.cacheService.getSession(ENV.USERTOKEN);
  }
  public getSignUpDetails() {
    return this.cacheService.getStorage(ENV.SIGNUP);
  }
  public getUserRole() {
    return this.cacheService.getSession(ENV.ROLE);
  }
  public checkLogin(): boolean {
    const token =  this.cacheService.getSession(ENV.TOKEN);
    const user =  this.cacheService.getSession(ENV.USERTOKEN);
    const role =  this.cacheService.getSession(ENV.ROLE);
    const createdDate =  this.cacheService.getSession(ENV.DATE_NOW);
    const expiredDate =  this.cacheService.getSession(ENV.TOKEN_DATE);
    if (!token || !user || !role) {
      return false;
    } else if (new Date(createdDate) > new Date(expiredDate)) {
      return false;
    } else {
      return true;
    }
  }
  public logOut() {
    this.signOut();
    this.cacheService.clearSession();
    this.cacheService.clearStorage();
    return true;
  }
  private signOut() {
    this.userService.logout().subscribe();
  }
}
