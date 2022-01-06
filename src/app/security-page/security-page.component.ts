import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-security-page',
  templateUrl: './security-page.component.html',
  styleUrls: ['./security-page.component.scss']
})
export class SecurityPageComponent {
  securityForm: FormGroup;
constructor(private _formBuilder: FormBuilder,
            private _router: Router,){
  this.securityForm = _formBuilder.group({
<<<<<<< HEAD
    securityKey: ['', [Validators.required, Validators.pattern('password@')]]
=======
    securityKey: ['', [Validators.required, Validators.pattern('D1r3ctS3cur3@')]]
>>>>>>> b570134f5048213a3e366e74a6a0bd051ee136f1
  })
}

get securityKey(){
  return this.securityForm.get("securityKey");
}

}
