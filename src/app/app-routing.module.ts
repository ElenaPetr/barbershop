import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'about-us', loadChildren: () => import('./pages/about-us/about-us.module').then(mod => mod.AboutUsModule) },
  { path: 'basket', loadChildren: () => import('./pages/basket/basket.module').then(mod => mod.BasketModule) },
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(mod => mod.ProductsModule) },
  { path: 'services', loadChildren: () => import('./pages/services/services.module').then(mod => mod.ServicesModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
