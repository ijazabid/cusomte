import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ItemsComponent } from './components/items/items.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { customApiInterceptor } from './custom-api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoutComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: customApiInterceptor, multi: true },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
