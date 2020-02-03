import { Component, OnInit, Input } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-role-tag',
  templateUrl: './role-tag.component.html',
  styleUrls: ['./role-tag.component.css']
})
export class RoleTagComponent implements OnInit {


  @Input() roleName : string  
  private roleString
  private color

  constructor() {


   }

  ngOnInit() {

    switch(this.roleName){

      case "ROLE_ADMIN":
        this.roleString = "admin"
        this.color = "danger"
        break
      case "ROLE_USER":
        this.roleString = "user"
        this.color = "primary"
        break
      case "ROLE_BOUTIQUE":
        this.roleString = "boutique"
        this.color = "success"
        break
    }


  }



}
