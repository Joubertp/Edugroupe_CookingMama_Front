import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { RecetteInfoComponent } from './components/recette-info/recette-info.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RecetteListComponent } from './components/recettes/recette-list/recette-list.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
import { RecetteRechercheComponent } from './components/recettes/recette-recherche/recette-recherche.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { RecettesComponent } from './components/recettes/recettes.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommentaireComponent } from './components/commentaire/commentaire.component';


@NgModule({
  declarations: [
    AppComponent,
    RecetteInfoComponent,
    RecetteListComponent,
    RecetteRechercheComponent,
    RecettesComponent,
    UserProfileComponent,
    CommentaireComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
