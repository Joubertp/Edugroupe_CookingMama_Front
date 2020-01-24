import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  @Input() commentaire: any
  @Input() mod: string = "GET"

  constructor() { }

  ngOnInit() {
    if(!["GET","EDIT","POST"].includes(this.mod)){
      this.mod = "GET"
    }
    console.log("commentaire",this.commentaire)
  }

  public setMod(mod: string){
    this.mod = mod
    console.log("Mode :",this.mod)
  }

}
