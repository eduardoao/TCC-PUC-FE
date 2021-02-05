
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseURL } from '../../shared/baseurl';
import jwt_decode from 'jwt-decode';

import { User } from '../../model/User';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));    //|| '{}'
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {       
            
        return this.currentUserSubject.value;
    } 

    public decodeToken(user: string): string {        
        return jwt_decode(user);
    }

  

    login(email: string, password: string) {        
        return this.http.post<any>(`${baseURL}/login`, { email, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');        
        //this.currentUserSubject.next(user);
    }
}