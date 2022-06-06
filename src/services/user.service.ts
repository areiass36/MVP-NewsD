import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "src/models/User";

const localStorageKey = "newsD.user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _user: User = {} as any;

    get loggedUser(): User {
        return this._user;
    }

    constructor(private http: HttpClient) {
        this._user = JSON.parse(localStorage.getItem(localStorageKey) ?? "null");
        console.log(this._user);
    }

    public createUser(user: User): Observable<User> {
        return this.http.post<User>(`${environment.NewsDApi}User`, user).pipe(tap(this.setUser.bind(this)));
    }

    public loginUser(user: User): Observable<User> {
        return this.http.post<User>(`${environment.NewsDApi}User/login`, user).pipe(tap(this.setUser.bind(this)));
    }

    private setUser(user: User) {
        this._user = user;
        localStorage.setItem(localStorageKey, JSON.stringify(user));
    }
}