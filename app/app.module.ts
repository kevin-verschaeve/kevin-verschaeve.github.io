import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { RegisterComponent } from './register.component';
import { SessionComponent } from './session.component';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './firebase.config';

@NgModule({
  imports:      [ 
    BrowserModule,
    routing,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
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
