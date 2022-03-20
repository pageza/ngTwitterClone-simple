import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../_services/users.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    uname: new FormControl(''),
    password: new FormControl('')
  })
  constructor(
    private _users: UsersService
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    if (this.loginForm.invalid) return
    this._users.login(this.loginForm.value)
  }
}
