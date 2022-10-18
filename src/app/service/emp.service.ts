import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient, @Inject("API_URL") private apiUrl) { }

  get() {
    return this.http
      .get(`${this.apiUrl}/em/`)
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  getPosition() {
    return this.http
      .get(`${this.apiUrl}/em/po`)
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  insert(data) {
    return this.http
      .post(`${this.apiUrl}/em/insert`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  update(data) {
    return this.http
      .post(`${this.apiUrl}/em/update`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  del(data) {
    return this.http
      .post(`${this.apiUrl}/em/del`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  search_byId(data) {
    return this.http
      .post(`${this.apiUrl}/em/search-by-id`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }
}
