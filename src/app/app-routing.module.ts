import { NgModule } from '@angular/core';
import { SecurityPageComponent } from './security-page/security-page.component';
import { WizardComponent } from './wizard/wizard.component';
import { GeneralInformationComponent } from './generalinformation/general-information.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: SecurityPageComponent, pathMatch: 'full'},
  {path: 'wizard', component: WizardComponent},
  {path: 'generalInfo', component: GeneralInformationComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
