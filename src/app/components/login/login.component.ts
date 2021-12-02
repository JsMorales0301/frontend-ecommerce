import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public userService: userService) {}

  ngOnInit(): void {}

  // apart
  isOkLoading = false;
  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isOkLoading = false;
    }, 3000);
  }
  // end modal functionality
  // form functionality
  passwordVisible = false;
  password?: string;
  // end apart

  formLogin = {
    username: '',
    password: ''
  }

  Login(): void {
    console.log('Working!')
    // this.userService.login(this.formLogin).subscribe((res) => {
    //   console.log(res);
    // });
  }
}
