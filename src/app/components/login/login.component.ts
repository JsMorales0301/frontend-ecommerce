import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersRequestService } from 'src/app/services/users-request.service';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, public userService: UsersRequestService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password:  [null, [Validators.required]]
    });
    console.log(this.validateForm)
  }

  // apart
  isOkLoading = false;
  handleOk(): any {
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

  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  }; 

login():void{
  console.log('showing data from createUser function', this.validateForm.value)

  let login = {
    host: this.userService._url,
    path: '/api/auth/login',
    data: {
      password: this.validateForm.value.password,
      username: this.validateForm.value.username
     

    }
  }
  this.userService.login(login.host + login.path, login.data).then((res:any) =>{
    console.log(res)
  })
};
 
submitForm(): void {
  if (this.validateForm.valid) {
    console.log('form submited', this.validateForm.value);
    this.login();
    
  } else {
    Object.values(this.validateForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }
}
}
