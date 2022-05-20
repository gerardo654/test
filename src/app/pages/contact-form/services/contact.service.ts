import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(@Inject('config') private config:any,
              private http: HttpClient) { }

  onSendFormContact(data: any): Observable<any> {
    return this.http.post<any>(this.config.url + 'prust/wikipedia-movie-data/master/movies.json', data);
  }
}
