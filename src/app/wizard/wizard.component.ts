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
<<<<<<< HEAD
    {name: 'fromSalon', value: 'From my own salon',isSelected:false},
    {name: 'fromHome', value: 'From home',isSelected:false},
    {name: 'rentChair', value: 'Rent a chair from salon',isSelected:false},
    {name: 'mobileBusiness', value: 'Mobile Business',isSelected:false}
    ];
  coverArray = [
    {name: 'publicLiability', value: 'Public Liability',isSelected:false},
    {name: 'yourProperty', value: 'Your Property',isSelected:false},
    {name: 'businessInterruption', value: 'Business Interruption',isSelected:false},
    {name: 'professionalIndemnity', value: 'Professional Indemnity',isSelected:false},
    {name: 'legalExpenses', value: 'Legal Expenses',isSelected:false},
    {name: 'cyber', value: 'Cyber',isSelected:false}
=======
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
>>>>>>> b570134f5048213a3e366e74a6a0bd051ee136f1
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
<<<<<<< HEAD
    this.isBusinessfromSelected = false;
    this.uncheckAll(this.businessFromArray);
    this.uncheckAll(this.coverArray);
    this.isCoverSelected = false;
=======
>>>>>>> b570134f5048213a3e366e74a6a0bd051ee136f1
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
<<<<<<< HEAD
        this.isBusinessFromNextClicked = false;
        this.uncheckAll(this.coverArray);
=======
>>>>>>> b570134f5048213a3e366e74a6a0bd051ee136f1
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
<<<<<<< HEAD

  uncheckAll(checkBoxList) {
    for (var i = 0; i < checkBoxList.length; i++) {
      checkBoxList[i].isSelected = false;
    }
  }
=======
>>>>>>> b570134f5048213a3e366e74a6a0bd051ee136f1
}
