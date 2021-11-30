import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{

  constructor() { }

  ngOnInit(): void {
   
  }


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

// end form functionality
}

