import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/http-services/services.service';
import { Observable } from 'rxjs';
import { Expert } from 'src/app/models/expert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss']
})
export class ExpertsComponent implements OnInit {

  experts$: Observable<Expert[]>;
  constructor(
    private router: Router,
    private servicesService: ServicesService) { }

  ngOnInit() {
    this.experts$ = this.servicesService.getExperts();
  }

  public toExpertDetail(expertId: number) {
    this.router.navigate(['experts', expertId]);
  }

}
