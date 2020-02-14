import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Page } from '../metiers/page';
import { Ingredient } from '../metiers/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientRepositoryService {

  private SERVICE_URL: string = "http://localhost:8080/ingredients"

  constructor(private http: HttpClient) { }


  public getList(){
    return this.http.get<Ingredient[]>(`${this.SERVICE_URL}/nomList`)
      .toPromise()
  }
}
