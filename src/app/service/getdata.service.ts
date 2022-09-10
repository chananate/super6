
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
}
