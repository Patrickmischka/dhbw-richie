import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class appService {


    constructor(private readonly http: HttpClient) { }

    public async createUser({ email, username, password }: { email: string, username: string, password: string }) {
        return this.http.post('http://localhost:4000/login', {
            email,
            username,
            password
        }).toPromise();
    }

}