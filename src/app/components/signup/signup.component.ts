import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthManagerService } from 'src/app/services/auth-manager.service';
import { User } from 'src/app/metiers/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public login : string;
  public mdp : string;

  private loginUrl : string = 'http://localhost:8080/users/login';

  constructor(private http : HttpClient,
              private router : Router,
              private authManager : AuthManagerService) { }

  ngOnInit() {
    this.login = "";
    this.mdp = "";
  }

  public tryLogin() : void {
    let credentials : string = window.btoa(this.login + ":" + this.mdp);
    this.authManager.setCurrentUser(null);
    let headers : HttpHeaders = new HttpHeaders({Authorization : `Basic ${credentials}`});
    this.http.get<User>(this.loginUrl, {headers : headers}).subscribe(u => {
      u.password = this.mdp;
      this.authManager.setCurrentUser(u);
      this.router.navigateByUrl("/");
    })
  }
}
