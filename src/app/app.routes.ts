import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AllCases } from './pages/all-cases/all-cases';
import { CaseGeneralInformation } from './pages/case-general-information/case-general-information';
import { ProcessingRequests } from './pages/processing-requests/processing-requests';
import { TaxpayerSearch } from './pages/taxpayer-search/taxpayer-search';
import { TaxOfficersSearch } from './pages/tax-officers-search/tax-officers-search';

export const routes: Routes = [
  // Redirect the default empty path to home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Home page (blank anchor page)
  { path: 'home', component: Home, title: 'Home' },

  // Case Management routes
  { path: 'all-cases', component: AllCases, title: 'All Cases' },
  { path: 'case-general-information/:id', component: CaseGeneralInformation, title: 'Case General Information' },
  { path: 'processing-requests', component: ProcessingRequests, title: 'Processing Requests' },

  // Taxpayer routes
  { path: 'taxpayer-search', component: TaxpayerSearch, title: 'Taxpayer Search' },

  // Tax Officer routes
  { path: 'tax-officers-search', component: TaxOfficersSearch, title: 'Tax Officers Search' },

  // Wildcard route to handle any unknown URLs
  { path: '**', redirectTo: 'home' }
];
