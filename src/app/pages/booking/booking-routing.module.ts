import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CanDeactivateGuard } from 'src/app/shared/guards/can-deactivate.guard';

const routes: Routes = [{
  path: '', component: BookingComponent, canDeactivate: [CanDeactivateGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
