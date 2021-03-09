import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodBeverageComponent } from './food-beverage.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: "",
    component: FoodBeverageComponent
  },
  {
    path: "new-food",
    loadChildren: () => import('../../routes/new-food/new-food.module').then(m => m.NewFoodModule)
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
