import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';
import { RouterModule, Route } from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    component: MembershipComponent
  }
]

@NgModule({
  declarations: [MembershipComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MembershipModule { }
