import { Component, OnInit } from '@angular/core'
import { Recette } from '../../metiers/recette'
import { RecetteRepositoryService } from 'src/app/services/recette-repository.service'
import { ActivatedRoute, Router } from '@angular/router'
import { getLocaleDateFormat } from '@angular/common'

@Component({
  selector: 'app-recette',
  templateUrl: './recette-info.component.html',
  styleUrls: ['./recette-info.component.css']
})
export class RecetteInfoComponent implements OnInit {

  recette: Recette
  commentaires: any = [{
    content : "Incroyable cette recette rend plus beau plus fort et plus intelligent!",
    user : {
      pseudo : "SuperGauffre" 
    },
    dateCreation : new Date()
  },{
    content : "J'ai essayé cette recette un dixaine de foie et moi je dit qu'il y a quelque chose de magic la dedans.",
    user : {
      pseudo : "JojoPasCool" 
    },
    dateCreation : new Date()
  }]

  constructor(private activeRoute : ActivatedRoute,
    private router: Router,
    private recetteRep: RecetteRepositoryService) { }

  ngOnInit() {
    this.recette = null
    this.activeRoute.params.subscribe(params => this.dataInit(params))
  }

  public dataInit(params){
      let id : number = Number(params["id"])
      // console.log("params",params)
      this.recetteRep.getRecetteById(id)    
      .then( r => {   return this.recette = r})
      .then( r => {
        r.listeEtapes.sort(function(a, b){return a.numero - b.numero})
        return r
      })
      .then( r => {   console.log("recette",r)})
  }

  public minToString(minutes: number){
    if(minutes >= 60){
      let hour = Math.floor(minutes/60)  
      minutes -= hour*60
      if(minutes == 0)
        return hour + " h"
      else
        return hour + " h et " + minutes + " min"
    }
    return minutes + " min"
  }

  public goToUser(id : number){
    this.router.navigateByUrl("utilisateurs/" + id)
  }

}
