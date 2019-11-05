import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { RecetteComponent } from './components/recette/recette.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RecetteListComponent } from './components/recette-list/recette-list.component'
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    RecetteComponent,
    RecetteListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
