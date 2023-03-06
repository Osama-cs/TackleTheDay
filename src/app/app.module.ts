import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddTodoListComponent } from './add-todo-list/add-todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AddTodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent, LandingPageComponent]
})
export class AppModule { }
