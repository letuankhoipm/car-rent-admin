import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Login } from 'app/redux/actions/auth.action';
import { Router } from '@angular/router';
import { selectAuthState } from 'app/redux/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logo = 'assets/img/logo.png'
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/dashboard'])
    if (this.loginForm.valid) {
      this.store.dispatch(new Login(this.loginForm.value));
      this.store.select(selectAuthState).subscribe((state: any) => {
        if (state.accessToken) {
          this.router.navigate(['/dashboard'])
        }
      });
    }
  }
}
