import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

@Injectable()
export class AuthComponent implements OnInit {

  goHome() {
    this.router.navigate(['/home']);
    
}

  name!: String;
  login!: String;
  email!: String;
  password!: String;

  constructor(private http: HttpClient, private reg: AuthService,  private router: Router){}

  userRegisterClick(){
    const user={
      name: this.name,
      email: this.email,
      login: this.login,
      password: this.password
    };


  }

  ngOnInit(): void {
  }
}
