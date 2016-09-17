import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionComponent } from './session.component';
import { RegisterComponent }  from './register.component';

const appRoutes: Routes = [
  { path: '', component: SessionComponent },
  { path: 'register', component: RegisterComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
