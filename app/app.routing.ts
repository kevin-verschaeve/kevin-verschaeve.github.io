import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionComponent } from './session.component';
import { LoginComponent }  from './login.component';

const appRoutes: Routes = [
  { path: '', component: SessionComponent },
  { path: 'login', component: LoginComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
