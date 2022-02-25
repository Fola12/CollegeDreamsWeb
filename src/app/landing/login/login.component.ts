import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { environment as ENV } from '../../../environments/environment';
import {NavigatorService} from '../../services/navigatorService/navigator.service';
import {UserService} from '../../services/api-handlers/userService/user.service';
import {BootstrapNotifyService} from '../../services/bootstrap-notify/bootstrap-notify.service';
import {UtilService} from '../../services/utilService/util.service';
import {IResponse} from '../../interfaces/iresponse';
import {CacheService} from '../../services/cacheService/cache.service';
declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public schools = [];
  fieldTextType: boolean;
  public credentials = {
    school: null,
    email: null,
    password: null
  };
  /*ngForm = this.fb.group({
    schools: ['', [Validators.required]]
  });*/
  isValidated = false;
  /*Schools: any =
    [
     'Damy Preparatory School',
     'Zamfara School',
     'Airforce Comprehensive Schools Agbani',
     'Dominion International Schools',
     'Zee Alpha International School',
     'AIR FORCE PRIMARY SCHOOL 1 IKEJA',
     'AIR FORCE PRIMARY SCHOOL 2 IKEJA',
     'AIR FORCE PRIMARY SCHOOL 3 IKEJA',
     'AIR FORCE SECONDARY SCHOOL IKEJA',
     'Damale College and Primary School'
    ];*/

  public loading = false;
  public EMAIL_VALIDATION =  ENV.EMAIL_VALIDATION;
  constructor(private userService: UserService, private navigatorService: NavigatorService,
              private cacheService: CacheService,
              private bootstrapService: BootstrapNotifyService, private utilService: UtilService, public fb: FormBuilder) {}

  ngOnInit() {
    this.getSchools();
    this.utilService.setFullPageBackgroundImage();
  }
  public loginProcess() {
     if (!this.credentials.email) {
      return this.bootstrapService.error('Email is a Required Field!!');
    } else if (!this.credentials.password) {
      return this.bootstrapService.error('Password is a Required Field!!');
    } else {
      this.loading = true;
      this.userService.auth(this.credentials).subscribe((response: IResponse) => {
        console.log('File Upload', this.credentials);
        this.loading = false;
        this.bootstrapService.success('Authentication successful!');
        const loginType = response.data.user.login_type.split('App\\Models\\')[1];
        this.cacheService.setSession(ENV.ROLE, loginType.toLowerCase());
        if (loginType.toLowerCase() === 'admin') {
          this.navigatorService.navigateUrl('/admin/dashboard');
        } else {
          this.navigatorService.navigateUrl('/client/dashboard');
        }
      }, error => {
        this.loading = false;
        console.info('Error after login ', error);
        this.bootstrapService.error(error.error.description, error.error.code);
      });
    }
  }
  /*get schools() {
    return this.ngForm.get('schools');
  }*/

  /*public getSchools(): void {
    this.userService.getSchools().subscribe((res: any) => {
      this.schools =  res;
    }, error => {
      this.bootstrapService.error(error?.error?.description, error?.error?.code);
    });
  }*/

  public getSchools(): void {
    this.userService.getSchools().subscribe((response: any) => {
      this.schools =  response;
    }, error => {
      this.bootstrapService.error(error.error.message || 'Unable to provide list of Schools');
      /*this.bootstrapService.error(error.error.description, error.error.code);*/
    });
  }

  /*changeSchool(e) {
    this.schools.setValue(e.target.value, {
      onlySelf: true
    })
  }*/

  public toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}

