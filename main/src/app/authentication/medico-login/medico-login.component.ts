import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';



@Component({
  selector: 'app-medico-login',
  templateUrl: './medico-login.component.html',
  styleUrls: ['./medico-login.component.scss']
})
export class MedicoLoginComponent implements OnInit {

  role = 'medico';
  public form: FormGroup = Object.create(null);

  constructor(private fb: FormBuilder,
    private router: Router) { }

  routeRedirect = '';



  emailPattern: any =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  ngOnInit(): void {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit(): void {
    this.router.navigate(['/dashboards/dashboard2']);
  }
}