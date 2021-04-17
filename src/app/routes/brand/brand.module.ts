import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: BrandComponent
  }
]

@NgModule({
  declarations: [BrandComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BrandModule { }
