import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:any;
  
  constructor() { }

  ngOnInit(): void {
  }

  login(form:any){
    alert("login" + form.uname + " " + form.pword);
    
  }

}
