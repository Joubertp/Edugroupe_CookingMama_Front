import { Component, OnInit, Input } from '@angular/core';
import { Recette } from 'src/app/metiers/recette';
import { Page } from 'src/app/metiers/page';
import { Subscription } from 'rxjs';
import { RecetteRepositoryService } from 'src/app/services/recette-repository.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css']
})
export class RecetteListComponent implements OnInit {

  recettes: Page<Recette>
  // pagination
  noPage: number
  taillePage: number
  totalItems: number
  private recetteSub: Subscription

  constructor(private router: Router,
    private recetteRep: RecetteRepositoryService) { }

  ngOnInit() {

    this.noPage = 1
    this.taillePage = 10
    this.totalItems = 0

    this.recetteSub = this.recetteRep.getObeservablePage()
      .subscribe(r => {
        this.noPage = r.number + 1
        this.taillePage = r.size
        this.totalItems = r.totalElements
        this.recettes = r
      })
  }

  public pageChanged(event): void {
    if(event.page != this.noPage){
      this.recetteRep.setNoPage(event - 1)
    }
    
  }

  public goTo(id: number): void {
    this.router.navigateByUrl("recettes/" + id)
  }

  public click(event){
    console.log(event)
  }
 
}
