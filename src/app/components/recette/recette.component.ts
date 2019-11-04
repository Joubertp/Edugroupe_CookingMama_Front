import { Component, OnInit } from '@angular/core'
import { Recette } from '../../metiers/recette'
import { RecetteRepositoryService } from 'src/app/services/recette-repository.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {

  recette: Recette

  constructor(private activeRoute : ActivatedRoute,
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

}
