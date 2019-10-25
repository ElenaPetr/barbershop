import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Timetable } from 'src/app/models/expert';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServicesService } from 'src/app/shared/http-services/services.service';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-expert-timetable',
  templateUrl: './expert-timetable.component.html',
  styleUrls: ['./expert-timetable.component.scss']
})
export class ExpertTimetableComponent implements OnInit {

  timeTable$: Observable<Timetable[] | {}>;

  constructor(private route: ActivatedRoute, private servicesService: ServicesService) { }

  ngOnInit() {

    this.servicesService.getExpertTimeTableById(45).subscribe(t => console.log(t));

    console.log('timetable init');
    this.route.parent.paramMap.subscribe(p => console.log(p));
    this.timeTable$ = this.route.parent.paramMap.pipe(
      tap((params: ParamMap) => console.log(params.get('id'))),
      switchMap((params: ParamMap) => this.servicesService.getExpertTimeTableById(+params.get('id')).pipe(
        tap(c => console.log(c))
      )
      )
    );
  }

}
