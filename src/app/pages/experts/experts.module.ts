import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './experts-routing.module';
import { ExpertsComponent } from './experts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpertDetailComponent } from './expert-detail/expert-detail.component';
import { ExpertCommentsComponent } from './expert-comments/expert-comments.component';
import { ExpertTimetableComponent } from './expert-timetable/expert-timetable.component';

@NgModule({
  declarations: [
    ExpertsComponent,
    ExpertDetailComponent,
    ExpertCommentsComponent,
    ExpertTimetableComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule
  ]
})

export class ExpertsModule { }
