import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{

  constructor(navBar : NavbarComponent) { }
  a: any = NavbarComponent;


  ngOnInit(): void {
   
  }

<<<<<<< HEAD
  isVisible = true;
  isOkLoading = false;



// modal functionality
  showModal(): void {
    this.isVisible = true;
    this.a.login = true
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.a.login = false
  }
// end modal functionality

// form functionality



passwordVisible = false;
password?: string;

=======
 
>>>>>>> morenofj-wip-feature-detailedPWindow
// end form functionality
}

