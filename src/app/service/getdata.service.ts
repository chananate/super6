
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl) {}

  getAll() {
    return this.http
      .get(`${this.apiUrl}/pt`)
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  getD() {
    return this.http
      .get(`${this.apiUrl}/pt/D`)
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  insertP(data) {
    return this.http
      .post(`${this.apiUrl}/pt/insert-patient`,{data})
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  updateP(data) {
    return this.http
      .post(`${this.apiUrl}/pt/update-patient`,{data})
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }

  delP(data) {
    return this.http
      .post(`${this.apiUrl}/pt/del-patient`,{data})
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }


  insertD(data) {
    return this.http
      .post(`${this.apiUrl}/pt/insert-dep`,{data})
      .toPromise()
      .then((result) => result)
      .catch((err) => err);
  }
}
