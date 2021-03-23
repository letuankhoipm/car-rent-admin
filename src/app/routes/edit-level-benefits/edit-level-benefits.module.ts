import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditLevelBenefitsComponent } from './edit-level-benefits.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: ':id',
    component: EditLevelBenefitsComponent
  }
]

@NgModule({
  declarations: [EditLevelBenefitsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EditLevelBenefitsModule { }
