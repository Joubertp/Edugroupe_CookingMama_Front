import { Injectable } from '@angular/core';
import { Recette } from '../metiers/recette';
import { BehaviorSubject } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Page } from '../metiers/page';

@Injectable({
  providedIn: 'root'
})
export class RecetteRepositoryService {

  
  private SERVICE_URL : string = "http://localhost:8080/recettes"
  private noPage : number
  private taillePage : number

  private recettesSubject : BehaviorSubject<Page<Recette>>

  constructor(private http: HttpClient) {
    this.noPage = 0
    this.taillePage = 8
    let emptyPage = Page.emptyPage<Recette>()
    this.recettesSubject = new BehaviorSubject(emptyPage)

   }

  //  public refreshList() {
  //   let urlParams : HttpParams = 
  //           new HttpParams().set('page' , "" + this.noPage)
  //                           .set('size', "" + this.taillePage);
  //   this.http.get<Page<Recette>>(this.SERVICE_URL, {params: urlParams})
  //            .subscribe(p => this.recettesSubject.next(p));
  // }

  public getRecetteById(id: number){
    return this.http.get<Recette>(`${this.SERVICE_URL}/${id}`)
           .toPromise()
  }
}