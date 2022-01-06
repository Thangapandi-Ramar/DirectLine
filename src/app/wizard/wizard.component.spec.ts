import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardComponent } from './wizard.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('WizardService', () => {
  let component: WizardComponent;
  let fixture: ComponentFixture<WizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardComponent ],
      imports: [ ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
