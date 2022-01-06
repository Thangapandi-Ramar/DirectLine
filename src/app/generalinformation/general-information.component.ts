import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {
  giForm: FormGroup;
  public formValues: {};
  titleArray = ['Doctor', 'Mr', 'Mrs', 'Miss'];
  isGiNextClicked = false;
   constructor(private formBuilder: FormBuilder) {

     this.giForm = formBuilder.group({
       companyName: ['', Validators.required],
       title: ['', Validators.required],
       firstName: ['', Validators.required],
       lastName: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       confirmEmail: ['', [Validators.required, Validators.email, this.confirmEmailCheck]],
       mobile: ['', [Validators.required, Validators.minLength(11)]],
       landLine: ['', Validators.required,]

     });

     this.giForm.controls.email.valueChanges.subscribe(
      x => {
        return this.giForm.controls.confirmemail.updateValueAndValidity();
      }
    );

   }
  get companyName() {
      return this.giForm.get('companyName');
  }

  get title(){
    return this.giForm.get('title');
  }

  get firstName(){
    return this.giForm.get('firstName');
  }

  get lastName(){
    return this.giForm.get('lastName');
  }

  get email(){
    return this.giForm.get('email');
  }

  get mobile(){
    return this.giForm.get('mobile');
  }

  get landLine(){
    return this.giForm.get('landLine');
  }

  get confirmEmail(){
    return this.giForm.get('confirmEmail');
  }

  confirmEmailCheck = control => {
    if (control.value != null && control.value !== '') {
      const confirmEmail = control.value;
      const emailControl = control.root.get('email');

      if (emailControl !== ''){
        const email = emailControl.value;
        if (email !== '' && email !== confirmEmail){
          return{
            emailValidity: true
          };
        }
      }else{
        return{
          emailValidity: null
        };
      }
    }
  }

  onSubmit() {
      this.formValues = this.giForm.value;
      this.isGiNextClicked = true;
  };
  
  onDivClick() {
    this.isGiNextClicked = false;
  }

  ngOnInit(): void {
  }

}
