import { Routes } from '@angular/router';
import { ProductsPage } from './pages/products/products';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsPage },
];
