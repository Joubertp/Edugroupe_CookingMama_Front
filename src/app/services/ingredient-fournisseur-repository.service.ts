import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IngredientFournisseur } from '../metiers/ingredientFournisseur';

@Injectable({
  providedIn: 'root'
})
export class IngredientFournisseurRepositoryService {

  private SERVICE_URL: string = "http://localhost:8080/ingredients_fournisseurs";

  constructor(private http : HttpClient) {

   }

   public getIngredientsFournisseursByIngredientId(id : number) {
     return this.http.get<IngredientFournisseur[]>(`${this.SERVICE_URL}/${id}`).toPromise();
   }

}
