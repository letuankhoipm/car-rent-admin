import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditLevelBenefitsComponent } from './edit-level-benefits.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EditLevelBenefitsModule { }
