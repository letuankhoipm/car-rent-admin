import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LevelService } from 'app/services/level.service';

@Component({
  selector: 'app-edit-level-benefits',
  templateUrl: './edit-level-benefits.component.html',
  styleUrls: ['./edit-level-benefits.component.css']
})
export class EditLevelBenefitsComponent implements OnInit {

  levelId: number;
  levelDetail: any;
  levelBenefitsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private levelService: LevelService) {
    this.levelBenefitsForm = this.formBuilder.group({
      levelBenefits: this.formBuilder.array([]),
      description: [null],
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.levelId = params.get('id');
      this.getLevelById();
      console.log(this.levelId);
    })
  }

  get benefitsControls(): FormArray {
    return this.levelBenefitsForm.get('levelBenefits') as FormArray
  }

  getLevelById = () => {
    this.levelService.getLevelById(this.levelId).subscribe((res: any) => {
      this.levelDetail = res.data;
      this.patchFormValue();
      console.log(res.data);
    })
  }

  patchFormValue = () => {
    this.levelDetail.levelBenefits.forEach(el => {
      this.benefitsControls.push(this.newBenefit());
    });
    this.levelBenefitsForm.patchValue({
      description: this.levelDetail.description,
      levelBenefits: this.levelDetail.levelBenefits
    });
  }

  newBenefit(): FormGroup {
    return this.formBuilder.group({
      id: [{ value: null, disabled: true }, Validators.required],
      from: [null],
      to: [null],
      reward: [null],
    })
  }

  addBenefit() {
    this.benefitsControls.push(this.newBenefit());
  }

  removeBenefit(i: number) {
    this.benefitsControls.removeAt(i);
  }

  onSubmit() {
    const data = {
      ...this.levelBenefitsForm.getRawValue()
    }
    this.levelService.updateLevelBenefit(this.levelId, data).subscribe((res: any) => {
      console.log(res);
    })
  }

}
