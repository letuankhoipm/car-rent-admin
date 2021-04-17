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

  customers;

  constructor(private router: Router, private levelService: LevelService) { }

  ngOnInit(): void {
  }

  editCustomer = (id) => {
    this.router.navigate([`/edit-member/${id}`]);
  }

  deleteCustomer(id: any) {
    this.levelService.deleteCustomerById(id).subscribe(res => {
      console.log(res);
    })
  }

  getCustomers() {
    this.levelService.getCustomer().subscribe((res: any) => {
      this.customers = res.data;
    })
  }

}
