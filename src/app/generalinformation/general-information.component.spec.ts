import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformationComponent } from './general-information.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('GeneralInformationComponent', () => {
  let component: GeneralInformationComponent;
  let fixture: ComponentFixture<GeneralInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInformationComponent ],
      imports: [ ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
