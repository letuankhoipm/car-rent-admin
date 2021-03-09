import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodBeverageComponent } from './food-beverage.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: "",
    component: FoodBeverageComponent
  }
]

@NgModule({
  declarations: [FoodBeverageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FoodBeverageModule { }
