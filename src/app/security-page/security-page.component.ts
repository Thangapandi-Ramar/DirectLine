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
    securityKey: ['', [Validators.required, Validators.pattern('password@')]]
  })
}

get securityKey(){
  return this.securityForm.get("securityKey");
}

}
