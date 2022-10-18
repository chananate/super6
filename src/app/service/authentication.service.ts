import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from '../modules/main/employee/users';
import { AlertService } from './alert.service';
import { EmpService } from './emp.service';
import { map } from 'rxjs/operators';
import { MainService } from './main.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Users>;
  public currentUser: Observable<Users>;
  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private mainService: MainService,
    private empService: EmpService,
    private router: Router
) {
    this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
}
public get currentUserValue(): Users {
  return this.currentUserSubject.value;
}
  login(username, password) {
    // return this.http.post<any>(`http://203.157.88.89:3000/login/login`, { username, password })
    return this.http.post<any>(`http://localhost:3001/login/login`, { username, password })
        .pipe(map(async (users) => {
            // login successful if there's a jwt token in the response
            console.log('user', users);

            if (users && users.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('currentUser', JSON.stringify(users));
                const token = await this.mainService.tokenName;
                sessionStorage.setItem(token, users.token);
                this.currentUserSubject.next(users);
            } else {
                this.alertService.error2('username หรือ password ไม่ถูกต้อง');
                this.router.navigate(['/login']);
            }
            return users;
        }));
}
}
