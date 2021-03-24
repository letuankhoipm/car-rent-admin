import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditLevelBenefitsComponent } from './edit-level-benefits.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ]
})
export class EditLevelBenefitsModule { }
