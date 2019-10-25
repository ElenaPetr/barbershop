import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap, switchMap } from 'rxjs/operators';
import { ServicesService } from 'src/app/shared/http-services/services.service';
import { Comments } from 'src/app/models/expert';

@Component({
  selector: 'app-expert-comments',
  templateUrl: './expert-comments.component.html',
  styleUrls: ['./expert-comments.component.scss']
})
export class ExpertCommentsComponent implements OnInit {
  comments$: Observable<Comments | {}>;
  constructor(private route: ActivatedRoute, private servicesService: ServicesService) { }

  ngOnInit() {
    console.log('comments init');
    this.route.parent.paramMap.subscribe(p => console.log(p));

    this.comments$ = this.route.parent.paramMap.pipe(
      tap((params: ParamMap) => console.log(params.get('id'))),
      switchMap((params: ParamMap) => this.servicesService.getExpertCommentsById(+params.get('id')).pipe(
        tap(c => console.log(c))
      )
      )
    );
  }

}
