import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepService {
  
  constructor(private http: HttpClient, @Inject("API_URL") private apiUrl) { }

  get() {
    return this.http
      .get(`${this.apiUrl}/dep/`)
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  insert(data) {
    return this.http
      .post(`${this.apiUrl}/dep/insert`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  update(data) {
    return this.http
      .post(`${this.apiUrl}/dep/update`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  del(data) {
    return this.http
      .post(`${this.apiUrl}/dep/del`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }
}
