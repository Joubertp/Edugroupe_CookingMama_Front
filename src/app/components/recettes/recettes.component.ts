import { Component, OnInit, ViewChild } from '@angular/core';
import { RecetteRepositoryService } from 'src/app/services/recette-repository.service';
import { RecetteListComponent } from './recette-list/recette-list.component';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }



}
