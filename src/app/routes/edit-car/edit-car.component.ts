import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'app/services/brand.service';
import { CarService } from 'app/services/car.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  carForm: FormGroup;
  brands;
  id: any;

  constructor(
    private brandService: BrandService,
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.carForm = new FormGroup({
      id: new FormControl(null),
      brandId: new FormControl(null),
      carNumberPlate: new FormControl(null),
      location: new FormControl(null),
      name: new FormControl(null),
      rentCost: new FormControl(null),
      image: new FormControl(null),
      fuel: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getInfo();
      console.log(this.id);
    });
    this.getBrands();
  }

  onSave() {
    const req = {
      ...this.carForm.value
    }
    this.carService.updateCar(this.id, req).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/'])
    })
  }

  getBrands() {
    this.brandService.getBrands().subscribe((res: any) => {
      this.brands = res.data;
    })
  }

  getInfo() {
    this.carService.getCarById(this.id).subscribe((res: any) => {
      this.carForm.patchValue({
        ...res.data
      })
    })
  }
}
