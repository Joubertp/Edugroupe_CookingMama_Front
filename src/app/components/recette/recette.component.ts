import { Component, OnInit } from '@angular/core';
import { Recette } from '../metiers/recette';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {

  recette: Recette

  constructor() { }

  ngOnInit() {
    this.recette = new Recette(
      0,
      "Pizza aux 3 fromages",
      new Date('December 17, 1995 03:24:00'),
      new Date('December 17, 1995 03:24:00'),
      123,
      238)
    console.log(this.recette)
  }

  tempsToString(minutes: number){
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

}
