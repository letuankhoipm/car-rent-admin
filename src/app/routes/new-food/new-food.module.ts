import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFoodComponent } from './new-food.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: "",
    component: NewFoodComponent
  }
]

@NgModule({
  declarations: [NewFoodComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NewFoodModule { }
