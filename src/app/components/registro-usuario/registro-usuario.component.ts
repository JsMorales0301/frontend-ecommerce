import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { UsersRequestService } from 'src/app/services/users-request.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {



 
  constructor(private fb: FormBuilder, private usersService: UsersRequestService ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      username: [null, [Validators.required]],
      idType: ['Cc'],
      userDocument: [null, [Validators.required]],
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
    });
   
  }

  isOkLoading = false;





// modal functionality




// end modal functionality

// form functionalities

// password
passwordVisible = false;
password?: string;

// typeid
validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

// Create user funtionality
createUser():void{
  console.log('showing data from createUser function', this.validateForm.value)

  let register = {
    host: this.usersService._url,
    path: '/api/auth/register',
    data: {
      email: this.validateForm.value.email ,
      password: this.validateForm.value.password,
      username: this.validateForm.value.username,
      idType: this.validateForm.value.idType,
      userDocument: this.validateForm.value.userDocument,
      name: this.validateForm.value.name,
      lastname: this.validateForm.value.lastName,

    }
  }
  this.usersService.createUser(register.host + register.path, register.data).then((res:any) =>{
    console.log(res)
  })
};

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('form submited', this.validateForm.value);
      this.createUser();
      
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

// end form functionalities
  
}
