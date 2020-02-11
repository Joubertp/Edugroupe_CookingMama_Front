import { Injectable } from '@angular/core';
import { User } from '../metiers/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthManagerService {

  private currentUser : User;
  private userSubject : BehaviorSubject<[User,boolean]>;

  constructor() { 
    this.currentUser=null;
    this.userSubject = new BehaviorSubject([null,false]);
  }

  public getUserAsObservable() : Observable<[User,boolean]> {
    return this.userSubject.asObservable();
  }

  public getCurrentUser() : User {
    return this.currentUser;
  }

  public setCurrentUser(utilisateur : User) {
    this.currentUser = utilisateur;
    if (this.currentUser == null) {
      this.userSubject.next([this.currentUser,false]);
    }
    else {
      this.userSubject.next([this.currentUser,true]);
    }
  }

  public isLoggedIn() : boolean {
    return this.currentUser != null;
  }

  public getCredentials() : string {
    return window.btoa(this.currentUser.username + ":" + this.currentUser.password);
  }

}
