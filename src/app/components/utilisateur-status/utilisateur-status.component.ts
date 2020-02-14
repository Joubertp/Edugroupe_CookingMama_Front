import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthManagerService } from 'src/app/services/auth-manager.service';
import { Router } from '@angular/router';
import { User } from 'src/app/metiers/user';

@Component({
  selector: 'app-utilisateur-status',
  templateUrl: './utilisateur-status.component.html',
  styleUrls: ['./utilisateur-status.component.css']
})
export class UtilisateurStatusComponent implements OnInit, OnDestroy {
  
  public currentUser : [User, boolean];
  public userSubscription : Subscription;

  constructor(private authManager : AuthManagerService,
              private router : Router) { }

  ngOnInit() {
    this.currentUser = [null,false];
    this.userSubscription = this.authManager.getUserAsObservable()
                                            .subscribe(u => this.currentUser = u);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  logout() : void {
    this.authManager.setCurrentUser(null);
    this.router.navigateByUrl("/signup");
  }

}
