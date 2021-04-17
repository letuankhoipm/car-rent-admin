import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars;

  constructor(private router: Router, private carService: CarService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  editBrand = (id) => {
    this.router.navigate([`/edit-car/${id}`]);
  }

  deleteBrand(id: any) {
    this.carService.deleteCarById(id).subscribe(res => {
      console.log(res);
    })
  }

  getBrands() {
    this.carService.getCars().subscribe((res: any) => {
      this.cars = res.data;
    })
  }

}
