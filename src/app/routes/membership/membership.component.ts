import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editBenefit = (id) => {
    this.router.navigate([`/membership/edit-level-benefits/${id}`])
  }

}
