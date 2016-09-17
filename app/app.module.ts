import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { LoginComponent } from './login.component';
import { SessionComponent } from './session.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [
    AppComponent,
    LoginComponent,
    SessionComponent
  ],
  providers: [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
