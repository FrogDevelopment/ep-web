import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditionService {

  constructor(private http: HttpClient) {
  }

  getEdition(): Observable<Date> {
    return this.http.get<Date>(`${environment.baseUrl}/edition`);
  }

  setEdition(date: Date): Observable<void> {
    return this.http.put<void>(`${environment.baseUrl}/edition`, date);
  }
}
