import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../shared/baseurl';
import { User } from '../../model/User';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${baseURL}/users`);
    }

    register(user: User) {       
        return this.http.post(`${baseURL}/users`, user);
    }

    delete(id: any) {
        return this.http.delete(`${baseURL}/users/${id}`);
    }
}