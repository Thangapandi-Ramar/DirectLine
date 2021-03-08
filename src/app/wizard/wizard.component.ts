import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WizardService} from '../Services/wizard.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {
  wizardForm: FormGroup;
  trades = [];
  showTradeDropDown = false;
  isTradeSelected = false;
  isBusinessfromSelected = false;
  isCoverSelected = false;
  isBusinessFromNextClicked = false;
  bfCheckedItemsArray = [];
  coverCheckedItemsArray = [];
  businessFromArray = [
    {name: 'fromSalon', value: 'From my own salon'},
    {name: 'fromHome', value: 'From home'},
    {name: 'rentChair', value: 'Rent a chair from salon'},
    {name: 'mobileBusiness', value: 'Mobile Business'}
    ];
  coverArray = [
    {name: 'publicLiability', value: 'Public Liability'},
    {name: 'yourProperty', value: 'Your Property'},
    {name: 'businessInterruption', value: 'Business Interruption'},
    {name: 'professionalIndemnity', value: 'Professional Indemnity'},
    {name: 'legalExpenses', value: 'Legal Expenses'},
    {name: 'cyber', value: 'Cyber'}
  ];
  constructor(private wizardService: WizardService, private formBuilder: FormBuilder) {
    this.wizardForm = formBuilder.group({
        tradeSearch: ['', Validators.required],
        fromSalon: [''],
        fromHome: [''],
        rentChair: [''],
        mobileBusiness: [''],
      publicLiability: [''],
      yourProperty: [''],
      businessInterruption: [''],
      professionalIndemnity: [''],
      legalExpenses: [''],
      cyber: ['']

    });
    this.trades = wizardService.getTradelist();
  }

  toggleDropDown(){
    if (this.getEnteredString().length > 0) {
      this.showTradeDropDown = true;
    }else{
      this.showTradeDropDown = false;
    }

  }
  get formControl(){return this.wizardForm.controls; }

  getEnteredString() {
    return this.wizardForm.value.tradeSearch;
  }

  selectTrade(val) {
    this.wizardForm.patchValue({tradeSearch: val});
    this.showTradeDropDown = false;
    this.isTradeSelected = true;
    this.isBusinessFromNextClicked = false;
  }

  onBusinessFromChange(name: string, isChecked) {
      if(isChecked){
        this.bfCheckedItemsArray.push(name);
      }else{
        this.bfCheckedItemsArray = this.bfCheckedItemsArray.filter(x => x != name);
      }
      if(this.bfCheckedItemsArray.length > 0){
        this.isBusinessfromSelected = true;
      }else {
        this.isBusinessfromSelected = false;
      }

  }

  onClickBusinessFromNext() {
    this.isBusinessFromNextClicked = true;
  }

  onCoverChange(name: string, isChecked) {
    if(isChecked){
      this.coverCheckedItemsArray.push(name);
    }else{
      this.coverCheckedItemsArray = this.coverCheckedItemsArray.filter(x => x != name);
    }
    if(this.coverCheckedItemsArray.length > 0){
      this.isCoverSelected = true;
    }else {
      this.isCoverSelected = false;
    }

  }
}
