import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddTodoListComponent } from './add-todo-list/add-todo-list.component';



const routes: Routes = [

  {
    path: '',
    component: LandingPageComponent
  },

  {
    path: 'addtodo',
    component: AddTodoListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
