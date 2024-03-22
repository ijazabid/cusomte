import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{ path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
// { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }, 
{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
{path: 'items', component: ItemsComponent},
{path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
