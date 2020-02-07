import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from '../metiers/page';
import { User } from '../metiers/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService {

  private SERVICE_URL: string = "http://localhost:8080/users"
  private noPage: number
  private taillePage: number

  private userSubject: BehaviorSubject<Page<User>>


  constructor(private http: HttpClient) {
    this.noPage = 0
    this.taillePage = 10
    let emptyPage = Page.emptyPage<User>()
    this.userSubject = new BehaviorSubject(emptyPage)
    this.refreshList()
   }


   public getSubjectAsObservable() : Observable<Page<User>>{
     return this.userSubject.asObservable();
   }

   public refreshList(){
    this.http.get<Page<User>>(this.SERVICE_URL)
    .subscribe(
      data => this.userSubject.next(data),
      error => {
        if(error.status == 404){
            this.userSubject.next(Page.emptyPage<User>())
        }
      }
      )
   
   }

   public getUserById(id: number){
    return this.http.get<User>(`${this.SERVICE_URL}/${id}`)
    .toPromise()
   }




   

}
