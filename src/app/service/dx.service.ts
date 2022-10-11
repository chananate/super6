import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DxService {

  constructor(private http: HttpClient, @Inject("API_URL") private apiUrl) { }

  get() {
    return this.http
      .get(`${this.apiUrl}/dx/`)
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  insert(data) {
    return this.http
      .post(`${this.apiUrl}/dx/insert`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  update(data) {
    return this.http
      .post(`${this.apiUrl}/dx/update`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  del(data) {
    return this.http
      .post(`${this.apiUrl}/dx/del`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }
}
