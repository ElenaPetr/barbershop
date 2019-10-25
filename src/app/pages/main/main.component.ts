import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/shared/http-services/services.service';
import { Store, select } from '@ngrx/store';
import { IRootState } from 'src/app/reducers';
import { LoadServices } from '../services/state/services.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  services$: Observable<Service[]>;

  constructor(private store: Store<IRootState>, private servicesService: ServicesService) { }

  ngOnInit() {
    this.services$ = this.store.pipe(select('services'));
    this.store.dispatch(LoadServices());
  }

}
