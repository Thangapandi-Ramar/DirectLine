import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  constructor() { }

  getTradelist(){
    return ['Hair & Beauty', 'Bed & Breakfast', 'Office & Professional', 'Retail', 'Trade Person'];
  }
}
