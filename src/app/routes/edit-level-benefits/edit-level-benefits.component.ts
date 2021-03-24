import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-level-benefits',
  templateUrl: './edit-level-benefits.component.html',
  styleUrls: ['./edit-level-benefits.component.css']
})
export class EditLevelBenefitsComponent implements OnInit {

  levelBenefitsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.levelBenefitsForm = this.formBuilder.group({
      levelBenefits: this.formBuilder.array([]),
    })
  }

  ngOnInit(): void {
  }

  get benefits(): FormArray {
    return this.levelBenefitsForm.get('levelBenefits') as FormArray
  }

  newBenefit(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      from: [null],
      to: [null],
      reward: [null],
    })
  }

  addBenefit() {
    this.benefits.push(this.newBenefit());
  }

  removeBenefit(i: number) {
    this.benefits.removeAt(i);
  }

  onSubmit() {
    console.log(this.levelBenefitsForm.value);
  }

}
