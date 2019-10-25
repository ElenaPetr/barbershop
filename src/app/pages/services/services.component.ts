import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IRootState } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/service';
import { tap } from 'rxjs/operators';
import { LoadServices } from './state/services.actions';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent implements OnInit {

  services$: Observable<Service[]>;

  constructor(private store: Store<IRootState>) {
    this.services$ = this.store.select('services').pipe(tap(services => {
      if (!services.length) {
        this.store.dispatch(LoadServices());
      }
    }));
  }

  ngOnInit() { }
}
