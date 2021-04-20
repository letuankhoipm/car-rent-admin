import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'app/services/brand.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {

  brandForm: FormGroup;
  id: any;

  constructor(private brandService: BrandService, private route: ActivatedRoute) {
    this.brandForm = new FormGroup({
      id: new FormControl({ value: null }),
      name: new FormControl(null),
      logo: new FormControl(null),
      nation: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getInfo();
      console.log(this.id);
    });
  }

  getInfo() {
    this.brandService.getBrandById(this.id).subscribe((res: any) => {
      this.brandForm.patchValue({
        ...res.data
      })
    })
  }

  onSave(): void {
    const req = {
      ...this.brandForm.value
    }
    console.log(req);
    this.brandService.updateBrand(this.id, req).subscribe((res: any) => {
      console.log(res);
    });
  }

}
