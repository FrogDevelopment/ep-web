import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Timetable} from './Timetable';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  constructor(private http: HttpClient) {
  }

  getTimetables(): Observable<Array<Timetable>> {
    return this.http.get<Array<Timetable>>(`${environment.baseUrl}/timetables`);
  }

  insert(timetable: Timetable): Observable<Timetable> {
    return this.http.post<Timetable>(`${environment.baseUrl}/timetables`, timetable);
  }

  update(timetable: Timetable): Observable<Timetable> {
    return this.http.put<Timetable>(`${environment.baseUrl}/timetables`, timetable);
  }

  delete(timetable: Timetable): Observable<any> {
    return this.http.request('delete', `${environment.baseUrl}/timetables`, {body: timetable});
  }
}
