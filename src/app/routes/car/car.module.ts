import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: CarComponent
  }
]

@NgModule({
  declarations: [CarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CarModule { }
