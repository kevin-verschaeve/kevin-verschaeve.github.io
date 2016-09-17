import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { RegisterComponent } from './register.component';
import { SessionComponent } from './session.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [ 
    BrowserModule,
    routing,
    FormsModule
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    SessionComponent
  ],
  providers: [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
