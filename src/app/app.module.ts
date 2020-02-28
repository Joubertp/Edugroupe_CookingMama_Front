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
import { CommentaireComponent } from './components/commentaire/commentaire.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { UtilisateursListComponent } from './components/utilisateurs/utilisateurs-list/utilisateurs-list.component';
import { UtilisateurProfileComponent } from './components/utilisateur-profile/utilisateur-profile.component';
import { RoleTagComponent } from './components/role-tag/role-tag.component';
import { SignupComponent } from './components/signup/signup.component';
import { UtilisateurStatusComponent } from './components/utilisateur-status/utilisateur-status.component';
import { RecetteEditComponent } from './components/recette-info/recette-edit/recette-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    RecetteInfoComponent,
    RecetteListComponent,
    RecetteRechercheComponent,
    RecettesComponent,
    CommentaireComponent,
    UtilisateursComponent,
    UtilisateursListComponent,
    UtilisateurProfileComponent,
    RoleTagComponent,
    SignupComponent,
    UtilisateurStatusComponent,
    RecetteEditComponent,
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
