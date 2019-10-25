import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FragmentsModule } from './fragments/fragments.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ServicesEffects } from './pages/services/state/services.effects';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FragmentsModule,
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot([ServicesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
