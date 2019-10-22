import { Component, OnInit } from '@angular/core';
import { Recette } from '../../metiers/recette';
import { RecetteRepositoryService } from 'src/app/services/recette-repository.service';
import { ActivatedRoute } from '@angular/router';

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
    this.recette = Recette.emptyRecette()
    this.activeRoute.params.subscribe(params => this.dataInit(params))
    this.recette.tempsCuisson = 123
  }

  public dataInit(params){
      // let id : number = Number(params["id"])
      console.log("params",params)
      let id = 4
      this.recetteRep.getRecetteById(id)    
      .then( r => {
        this.recette = r;
        console.log("r",r)
      })
      .then( r => {
        console.log("this.recette",this.recette)
      })
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
    return minutes + " min";
  }

  public getRecette() : Recette{
    console.log("getRecette()",this.recette)
    return this.recette
  }

}
