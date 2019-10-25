import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpertsComponent } from './experts.component';
import { ExpertDetailComponent } from './expert-detail/expert-detail.component';
import { ExpertCommentsComponent } from './expert-comments/expert-comments.component';
import { ExpertTimetableComponent } from './expert-timetable/expert-timetable.component';

const routes: Routes = [
  { path: '', component: ExpertsComponent },
  { path: ':id', component: ExpertDetailComponent, children: [
    {path: '', redirectTo: 'comments'},
    {
      path: 'comments',
      component: ExpertCommentsComponent
    },
    {
      path: 'timetable',
      component: ExpertTimetableComponent
    }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
