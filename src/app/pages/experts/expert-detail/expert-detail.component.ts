import { Component, OnInit } from '@angular/core';
import { Expert } from 'src/app/models/expert';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ServicesService } from 'src/app/shared/http-services/services.service';
import { slideInAnimation } from 'src/app/animation';

@Component({
  selector: 'app-expert-detail',
  templateUrl: './expert-detail.component.html',
  styleUrls: ['./expert-detail.component.scss'],
  animations: [ slideInAnimation ]
})
export class ExpertDetailComponent implements OnInit {

  expert$: Observable<Expert | {}>;

  constructor(private route: ActivatedRoute, private servicesService: ServicesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => console.log(p.get('id')));
    this.expert$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.servicesService.getExpertById(+params.get('id')))
    );
  }

  getAnimationData(outlet: RouterOutlet) {
    // tslint:disable-next-line: no-string-literal
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
