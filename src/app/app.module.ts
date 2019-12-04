import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { RecetteComponent } from './components/recette/recette.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RecetteListComponent } from './components/recette-list/recette-list.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
import { RecetteRechercheComponent } from './components/recette-recherche/recette-recherche.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { RecettesComponent } from './components/recettes/recettes.component';


@NgModule({
  declarations: [
    AppComponent,
    RecetteComponent,
    RecetteListComponent,
    RecetteRechercheComponent,
    RecettesComponent,
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
