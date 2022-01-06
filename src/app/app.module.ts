import {Component, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { GeneralInformationComponent } from './generalinformation/general-information.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SecurityPageComponent } from './security-page/security-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WizardFilterPipe } from './wizard-filter.pipe';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    GeneralInformationComponent,
    HeaderComponent,
    FooterComponent,
    SecurityPageComponent,
    WizardFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
