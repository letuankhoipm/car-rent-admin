import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: "",
    component: GameComponent
  }
]

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GameModule { }
