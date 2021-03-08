
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPageComponent } from './security-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { routes } from '../app-routing.module';

describe('SecurityPageComponent', () => {
  let component: SecurityPageComponent;
  let fixture: ComponentFixture<SecurityPageComponent>;
  let location: Location;
  let router: Router;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityPageComponent ],
      imports: [ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes)]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityPageComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);    
    router.initialNavigation();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('Should Validate the Security key field', () => {
    let securityField = component.securityForm.controls['securityKey'];
    expect(securityField.valid).toBeFalsy();
    expect(securityField.touched).toBeFalsy();
    expect(securityField.errors['required']).toBeTruthy();
    securityField.setValue('abcd');
    expect(securityField.errors['pattern']).toBeTruthy();
    securityField.setValue('D1r3ctS3cur3@');
    expect(securityField.errors).toBeNull();
   
  });

  it('Should Validate the Proceed button disabled', () => {
    let securityField = component.securityForm.controls['securityKey'];
    securityField.setValue('abcd');
    fixture.detectChanges(); 
    expect(component.securityForm.invalid).toBeTruthy();
    let proceedBtn = fixture.debugElement.query(By.css('[name=proceedBtn]'));
    expect(proceedBtn.nativeElement.disabled).toBeTruthy();
  });

  it('Should Validate the Proceed button enabled', () => {
    let securityField = component.securityForm.controls['securityKey'];
    securityField.setValue('D1r3ctS3cur3@');
    fixture.detectChanges();
    expect(component.securityForm.invalid).toBeFalsy();
    let proceedBtn = fixture.debugElement.query(By.css('[name=proceedBtn]'));
    expect(proceedBtn.nativeElement.disabled).toBeFalsy();
  });

  it('Should navigate to /login page before click proceed button', () => {
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/login')
    });
  });


  it('Should navigate to /wizard page after click proceed button', () => {
      let securityField = component.securityForm.controls['securityKey'];
      securityField.setValue('D1r3ctS3cur3@');
      let proceedBtn = fixture.debugElement.query(By.css('[name=proceedBtn]'));
      expect(proceedBtn.nativeElement.disabled).toBeFalsy();
      let nativeButton: HTMLButtonElement = proceedBtn.nativeElement;
      nativeButton.click();
      fixture.detectChanges();     
      fixture.whenStable().then(() => {
        expect(location.path()).toBe('/wizard')
      });
  });

});