import { Component, OnInit } from '@angular/core';
import { UserRepositoryService } from 'src/app/services/user-repository.service';
import { Recette } from 'src/app/metiers/recette';
import { Page } from 'src/app/metiers/page';
import { Subscription } from 'rxjs';
import { User } from 'src/app/metiers/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateurs-list',
  templateUrl: './utilisateurs-list.component.html',
  styleUrls: ['./utilisateurs-list.component.css']
})
export class UtilisateursListComponent implements OnInit {

  private userSub: Subscription
  users: Page<User>
  // pagination
  noPage: number
  taillePage: number
  totalItems: number

  constructor(private router: Router,
    private userRep : UserRepositoryService) {
    
   }

  ngOnInit() {

    this.noPage = 1
    this.taillePage = 10
    this.totalItems = 0

    this.userSub = this.userRep.getSubjectAsObservable()
      .subscribe( pu => {
        this.noPage = pu.number + 1 
        this.taillePage = pu.size
        this.totalItems = pu.totalElements
        this.users = pu
      })
  }

  public goTo(id : number){
    this.router.navigateByUrl("utilisateurs/"+id)
  }

}
