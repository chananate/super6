import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpdServService {
 
  constructor(private http: HttpClient, @Inject("API_URL") private apiUrl) { }

  get() {
    return this.http
      .get(`${this.apiUrl}/opdS/`)
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  insert(data) {
    return this.http
      .post(`${this.apiUrl}/opdS/insert`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  update(data) {
    return this.http
      .post(`${this.apiUrl}/opdS/update`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  del(data) {
    return this.http
      .post(`${this.apiUrl}/opdS/del`, { data })
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }
}
