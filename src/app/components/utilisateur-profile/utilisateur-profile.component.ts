import { Component, OnInit } from '@angular/core';
import { UserRepositoryService } from 'src/app/services/user-repository.service';
import { User } from 'src/app/metiers/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur-profile',
  templateUrl: './utilisateur-profile.component.html',
  styleUrls: ['./utilisateur-profile.component.css']
})
export class UtilisateurProfileComponent implements OnInit {

  private user: User

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private userRep: UserRepositoryService) { }

  ngOnInit() {
    this.user = null
    this.activeRoute.params
      .subscribe(params => this.dataInit(params))
  }

  public dataInit(params) {
    let id: number = Number(params["id"])
    // console.log("params",params)
    this.userRep.getUserById(id)
      .then(u => { return this.user = u })
      .then(u => { console.log("user", u) })
  }

  public goToRecette(id : number){
    this.router.navigateByUrl("recettes/" + id)
  }

}
