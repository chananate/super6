import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferService {

  constructor(private http: HttpClient, @Inject("API_URL") private apiUrl) { }

  get() {
    return this.http
      .get(`${this.apiUrl}/refer/`)
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  insert(data) {
    return this.http
      .post(`${this.apiUrl}/refer/insert`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

}
