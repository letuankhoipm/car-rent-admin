import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLevelBenefitsComponent } from './edit-level-benefits.component';

describe('EditLevelBenefitsComponent', () => {
  let component: EditLevelBenefitsComponent;
  let fixture: ComponentFixture<EditLevelBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLevelBenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLevelBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
