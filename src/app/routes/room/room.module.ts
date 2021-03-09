import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: "",
    component: RoomComponent
  }
]

@NgModule({
  declarations: [RoomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoomModule { }
