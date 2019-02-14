
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Api, AuthODetail } from "~/app/config/api";
import { LoginPostModel, UserPostModel } from "../model/user.model";

@Injectable()
export class UserService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private http: HttpClient
    ) { }

    login(loginData: LoginPostModel) {
        return this.http.post(AuthODetail.path + Api.login, loginData, this.httpOptions).pipe(
            map(this.extractData));
    }

    register(user: UserPostModel) {
        return this.http.post(AuthODetail.path + Api.register, user, this.httpOptions).pipe(
            map(this.extractData));
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }
}