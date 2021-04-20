import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LevelService } from 'app/services/level.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  memberForm: FormGroup;
  id: any;
  public role = [
    {
      name: 'Own',
      id: 2
    },
    {
      name: 'Customer',
      id: 3
    },
  ];

  public gender = [
    {
      name: 'Male',
      value: 'nam'
    },
    {
      name: 'Female',
      value: 'nu'
    },
  ];

  constructor(private levelService: LevelService, private route: ActivatedRoute) {
    this.memberForm = new FormGroup({
      id: new FormControl({ value: null }),
      address: new FormControl(null),
      email: new FormControl(null),
      fullName: new FormControl(null),
      gender: new FormControl(null),
      idCard: new FormControl(null),
      phoneNumber: new FormControl(null),
      roleId: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getCustomerInfo(this.id);
      console.log(this.id);
    });
  }

  getCustomerInfo(id: any) {
    this.levelService.getCustomerById(id).subscribe((res: any) => {
      this.memberForm.patchValue({
        ...res.data
      })
    })
  }

  onSave(): void {
    const req = {
      ...this.memberForm.value
    }
    console.log(req);
    this.levelService.updateCustomer(this.id, req).subscribe((res: any) => {
      console.log(res);
    });
  }

}
