import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Service } from 'src/app/models/service';
import { of, Observable } from 'rxjs';
import { Expert, Timetable, Comments } from 'src/app/models/expert';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  public getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${environment.api}/services`).pipe(
      catchError(() => {
        console.log('error');
        return of([]);
      })
    );
  }

  public getExperts(): Observable<Expert[]> {
    return this.http.get<Expert[]>(`${environment.api}/experts`).pipe(
      catchError(() => {
        console.log('error');
        return of([]);
      })
    );
  }

  public getExpertById(id: number): Observable<Expert | {}> {
    return this.http.get<Expert>(`${environment.api}/experts/${id}`).pipe(
      catchError(() => {
        console.log('error');
        return of({});
      })
    );
  }

  public getExpertCommentsById(id: number): Observable<Comments| {}> {
    console.log(id);
    return this.http.get<Comments>(`${environment.api}/experts/${id}/comments`).pipe(
      catchError(() => {
        console.log('error');
        return of({});
      })
    );
  }

  public getExpertTimeTableById(id: number): Observable<Timetable[] | {}> {
    return this.http.get<Timetable[]>(`${environment.api}/experts/${id}/timetable`).pipe(
      catchError(() => {
        console.log('error');
        return of({});
      })
    );
  }
}
