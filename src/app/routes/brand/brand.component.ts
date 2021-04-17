import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands;

  constructor(private router: Router, private brandService: BrandService) { }

  ngOnInit(): void {
  }

  editBrand = (id) => {
    this.router.navigate([`/edit-brand/${id}`]);
  }

  deleteBrand(id: any) {
    this.brandService.deleteBrandById(id).subscribe(res => {
      console.log(res);
    })
  }

  getBrands() {
    this.brandService.getBrands().subscribe((res: any) => {
      this.brands = res.data;
    })
  }
}
