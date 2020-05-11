import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { reducer } from '../app/home/reducers/book.reducer';
import { StoreModule } from '@ngrx/store';
import { BookEffects } from '../app/home/effects/book.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
//routers
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';

//service

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { OptionType } from './core/enums/enums';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NzTableModule } from 'ng-zorro-antd';
//import { HomeComponentModule } from './home/home.module';
import { ROOT_REDUCERS } from './app.reducer';
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
   // HomeComponentModule,
    NgZorroAntdModule,
    NzTableModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([BookEffects]),

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
