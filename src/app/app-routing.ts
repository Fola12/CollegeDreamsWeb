import {IRouting} from './interfaces/irouting';
import {RouterModule, Routes} from '@angular/router';
import {AdminRoutesComponent} from './admin/admin-routes/admin-routes.component';
import {UserRoutesComponent} from './user/user-routes/user-routes.component';
import {LoginComponent} from './landing/login/login.component';
import {GuardService, RoleServiceAdmin, RoleServiceClient} from './services/gaurdService/guard.service';
import {UserDashboardComponent} from './user/user-dashboard/user-dashboard.component';
import {AdminDashboardComponent} from './admin/admin-dashboard/admin-dashboard.component';
import {ForgotPasswordComponent} from './landing/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './landing/reset-password/reset-password.component';
import {LFooterComponent} from './shared/layout/landing/l-footer/l-footer.component';
import {LHeaderComponent} from './shared/layout/landing/l-header/l-header.component';
import {ChangePasswordComponent} from './shared/components/change-password/change-password.component';
import {ClientTypesComponent} from './admin/client-types/client-types.component';
import { ResultsComponent} from "./admin/components/results/results.component";
import { EPurseComponent} from "./admin/components/e-purse/e-purse.component";
import { ReportsComponent} from "./admin/components/reports/reports.component";
import {ManageClientsComponent} from './admin/manage-clients/manage-clients.component';
import {ManageClientDocumentsComponent} from './admin/manage-client-documents/manage-client-documents.component';
import {ProfilesComponent} from "./admin/profiles/profiles.component";
import {UserSidebarComponent} from "./user/layouts/user-sidebar/user-sidebar.component";
import {StudentComponent} from "./user/components/student/student.component";
import {StudentsComponent} from "./admin/components/students/students.component";
import {LandingPageComponent} from "./landing/landing-page/landing-page.component";
import {OnlineAdmissionsComponent} from "./landing/online-admissions/online-admissions.component";
import {VerifyPasswordComponent} from "./landing/verify-password/verify-password.component";
import { VerifyAccountComponent } from './landing/verify-account/verify-account.component';
import {PreviewPageComponent} from "./landing/online-admissions/preview-page/preview-page.component";
import {PaymentPageComponent} from "./landing/online-admissions/payment-page/payment-page.component";
import {SignUpComponent} from "./landing/sign-up/sign-up.component";
import {ThankYouComponent} from "./landing/thank-you/thank-you.component";

const landingRoutes: Routes = [
  {path: '', component: LandingPageComponent, pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'thank-you', component: ThankYouComponent},
  {path: 'online-admissions', component: OnlineAdmissionsComponent},
  {path: 'online-admissions:type', component: OnlineAdmissionsComponent},
  {path: 'online-admissions/preview', component: PreviewPageComponent},
  {path: 'online-admissions/payment', component: PaymentPageComponent},
  {path: 'verify-account', component: VerifyAccountComponent},
  {path: 'verify-password', component: VerifyPasswordComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  // {path: 'reset-password/:token', component: ResetPasswordComponent},
  {path: 'client', loadChildren: () => import('./shared/modules/user/user.module').then(m => m.UserModule)},
  {path: 'admin', loadChildren: () => import('./shared/modules/admin/admin.module').then(m => m.AdminModule)},
  {path: '**', component: LoginComponent},
];

export const landingRouting: IRouting = {
  routes: RouterModule.forRoot(landingRoutes, {useHash: false}),
  components: [
    LoginComponent,
    ForgotPasswordComponent,
    VerifyPasswordComponent,
    VerifyAccountComponent,
    LHeaderComponent,
    LFooterComponent,
    ResetPasswordComponent,
    SignUpComponent,
    ThankYouComponent
  ],
  entryComponent: [],
  providers: []
};


export const userRoutes: Routes = [
  {path: '', component: UserRoutesComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [GuardService, RoleServiceClient], data: {roles: 'CLIENT'}},
    {path: 'dashboard', component: UserDashboardComponent, canActivate: [GuardService, RoleServiceClient], data: {roles: 'CLIENT'}},
    {path: 'profiles', component: ProfilesComponent, canActivate: [GuardService, RoleServiceClient], data: {roles: 'CLIENT'}},
    {path: 'students', component: StudentComponent, canActivate: [GuardService, RoleServiceClient], data: {roles: 'CLIENT'}},
    {path: 'results', component: ResultsComponent, canActivate: [GuardService, RoleServiceClient], data: {roles: 'CLIENT'}},
    {path: 'reports', component: ReportsComponent, canActivate: [GuardService, RoleServiceClient], data: {roles: 'CLIENT'}},
    {path: 'manage-documents', component: UserDashboardComponent},
    {path: 'change-password', component: ChangePasswordComponent, canActivate: [GuardService, RoleServiceClient], data: {roles: 'CLIENT'}},
  ], canActivate: [GuardService, RoleServiceClient], data: {roles: 'CLIENT'}},
  {path: '**', component: UserRoutesComponent, canActivate: [GuardService, RoleServiceClient], data: {roles: 'CLIENT'}}
];

export const userRouting: IRouting = {
  routes: RouterModule.forChild(userRoutes),
  components: [
    UserRoutesComponent,
    UserDashboardComponent,
    UserSidebarComponent,
    StudentComponent
  ],
  entryComponent: [],
  providers: [RoleServiceClient]
};

export const adminRoutes: Routes = [
  {path: '', component: AdminRoutesComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [GuardService, RoleServiceAdmin], data: {roles: 'ADMIN'}},
    {path: 'dashboard', component: AdminDashboardComponent, canActivate: [GuardService, RoleServiceAdmin], data: {roles: 'ADMIN'}},
    {path: 'client-types', component: ClientTypesComponent, canActivate: [GuardService, RoleServiceAdmin], data: {roles: 'ADMIN'}},
    {path: 'manage-clients', component: ManageClientsComponent, canActivate: [GuardService, RoleServiceAdmin], data: {roles: 'ADMIN'}},
    {path: 'profiles', component: ProfilesComponent, canActivate: [GuardService, RoleServiceAdmin], data: {roles: 'ADMIN'}},
    {path: 'students', component: StudentsComponent, canActivate: [GuardService, RoleServiceAdmin], data: {roles: 'ADMIN'}},
    {path: 'results', component: ResultsComponent, canActivate: [GuardService, RoleServiceAdmin], data: {roles: 'ADMIN'}},
    {path: 'epurse', component: EPurseComponent, canActivate: [GuardService, RoleServiceAdmin], data: {roles: 'ADMIN'}},
    {path: 'reports', component: ReportsComponent, canActivate: [GuardService, RoleServiceAdmin], data: {roles: 'ADMIN'}},
    {path: 'client/:clientId/manage-documents', component: ManageClientDocumentsComponent, canActivate: [GuardService, RoleServiceAdmin],
      data: {roles: 'ADMIN'}},
    {path: 'change-password', component: ChangePasswordComponent, canActivate: [GuardService, RoleServiceAdmin], data: {roles: 'ADMIN'}},
  ]
  },
  {path: '**', component: AdminRoutesComponent, canActivate: [GuardService, RoleServiceAdmin], data: {roles: 'ADMIN'} }
];

export const adminRouting: IRouting = {
  routes: RouterModule.forChild(adminRoutes),
  components: [
    AdminRoutesComponent,
    AdminDashboardComponent,
    ClientTypesComponent,
    ManageClientsComponent,
    ProfilesComponent,
    ManageClientDocumentsComponent,
    StudentsComponent,
    ResultsComponent,
    EPurseComponent,
    ReportsComponent
  ],
  entryComponent: [],
  providers: [RoleServiceAdmin]
};

