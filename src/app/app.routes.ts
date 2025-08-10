import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Users } from './pages/users/users';

export const routes: Routes = [
  // Redirect the default empty path to the dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // Route for the Dashboard page
  { path: 'dashboard', component: Dashboard, title: 'Dashboard' },

  // Route for the Users page
  { path: 'users', component: Users, title: 'Users' },

  // Wildcard route to handle any unknown URLs
  { path: '**', redirectTo: 'dashboard' }
];
