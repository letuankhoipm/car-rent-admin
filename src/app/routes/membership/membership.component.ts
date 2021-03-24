import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Level } from 'app/models/level.model';
import { LevelService } from 'app/services/level.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  levels: Level[] = [];

  constructor(private router: Router, private levelService: LevelService) { }

  ngOnInit(): void {
    this.getLevel();
  }

  editBenefit = (id) => {
    this.router.navigate([`/membership/edit-level-benefits/${id}`]);
  }

  getLevel = () => {
    this.levelService.getLevel().subscribe((res: any) => {
      this.levels = res.data;
      console.log(res);
    })
  }

}
