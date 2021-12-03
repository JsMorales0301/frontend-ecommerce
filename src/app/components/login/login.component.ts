import { Component, OnInit } from '@angular/core';
import { UsersRequestService } from 'src/app/services/users-request.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public userService: UsersRequestService) {}

  ngOnInit(): void {}

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

  formLogin = {
    username: '',
    password: ''
  }

  
login(formLogin: any):void{
  console.log('showing data from createUser function', formLogin)

  let login = {
    host: this.userService._url,
    path: '/api/auth/login',
    data: {
      password: this.formLogin.password,
      username: this.formLogin.username,
     

    }
  }
  this.userService.login(login.host + login.path, login.data).then((res:any) =>{
    console.log(res)
  })
};
 

}
