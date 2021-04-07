import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Login } from 'app/redux/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logo = 'assets/img/logo.png'
  loginForm: FormGroup;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
    this.loginForm.valueChanges.subscribe(value => console.log(value))
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(new Login(this.loginForm.value));
    }
  }
}
