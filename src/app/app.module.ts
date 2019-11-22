import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { RecetteComponent } from './components/recette/recette.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RecetteListComponent } from './components/recette-list/recette-list.component'
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { FormsModule } from '@angular/forms'
import { RecetteRechercheComponent } from './components/recette-recherche/recette-recherche.component';
import { RecetteRechercheCritereIngredientComponent } from './components/recette-recherche-critere-ingredient/recette-recherche-critere-ingredient.component'
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthInterceptorService } from './services/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    RecetteComponent,
    RecetteListComponent,
    RecetteRechercheComponent,
    RecetteRechercheCritereIngredientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    FormsModule,
    NgSelectModule
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
