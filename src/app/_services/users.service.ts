import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {AuthData} from "../models/auth-data";
import {Router} from "@angular/router";

const API_URL = '//localhost:3030/api/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }
  // Send the new User to the backend to add
  register(user: User) {
    console.log(user)
    this._http.post<User>(API_URL+ '/create', user)
      .subscribe( () => this._router.navigateByUrl('login'))
  }
  // Send the User credentials to the backend to verify
  login(authData: AuthData ) {
    this._http.post<User>(API_URL + '/login', authData)
      .subscribe( () => this._router.navigateByUrl('home'))
  }
  // TODO: Edit user info, guard the route so user can only edit their own info if they are logged in
  editUserProfile() {

  }
  // TODO: Delete a user, guard route so that only Admin or the logged in user can delete profile
  deleteUserProfile() {

  }
}
