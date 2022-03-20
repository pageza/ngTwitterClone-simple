import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {UsersService} from "../../_services/users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    uname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(
    private _users: UsersService
  ) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    if (this.registrationForm.invalid) return
    // TODO: send values to the users service
    console.log(this.registrationForm.value)
    return this._users.register(this.registrationForm.value)
  }
}
