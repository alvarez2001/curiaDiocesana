import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { TemplateComponent } from "./login/template/template.component";
import { TemplateInicioComponent } from "./administrador/templates/template-inicio/template-inicio.component";
import { NavbarAdministradorComponent } from './administrador/navbar-administrador/navbar-administrador.component';
import { AppComponent } from './app.component';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { pantallaCarga } from "./reducers/app-reducers";
import { registerUser, recoveryPassword, loginUser, detailUser, LogoutUser } from "./reducers/login.reducers";
import { LoginEffects } from './effects/login.effects';
import { PrincipalInterceptor } from "./services/interceptores/principal.interceptor";
import { AsidesNavAdministradorComponent } from './asides-nav-administrador/asides-nav-administrador.component';





const ngrxImport = [
  StoreModule.forRoot({
    pantallaCarga:pantallaCarga,
    registerUserSolicitante:registerUser,
    recoveryPassword:recoveryPassword,
    loginUser:loginUser,
    detailUser:detailUser,
    LogoutUser:LogoutUser
  }),
    EffectsModule.forRoot([
      LoginEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
];


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    NavbarAdministradorComponent,
    TemplateInicioComponent,
    AsidesNavAdministradorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ...ngrxImport,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PrincipalInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
