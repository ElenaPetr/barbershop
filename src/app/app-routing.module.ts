import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'experts', loadChildren: () => import('./pages/experts/experts.module').then(mod => mod.ExpertsModule) },
  { path: 'services', loadChildren: () => import('./pages/services/services.module').then(mod => mod.ServicesModule) },
  { path: 'booking', loadChildren: () => import('./pages/booking/booking.module').then(mod => mod.BookingModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
