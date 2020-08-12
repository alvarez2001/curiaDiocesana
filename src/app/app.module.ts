import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TemplateComponent } from "./login/template/template.component";
import { TemplateInicioComponent } from "./administrador/templates/template-inicio/template-inicio.component";
import { NavbarAdministradorComponent } from './administrador/navbar-administrador/navbar-administrador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeparadorMilesDirective } from './directivas/separador-miles.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    NavbarAdministradorComponent,
    TemplateInicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
