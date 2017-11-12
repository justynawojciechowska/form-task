import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./../forms.scss', './../modal.scss']
})
export class AccountFormComponent implements OnInit {
  formTitle = 'Take it all with you. Switch between devices, and pick up.';
  requiredField = '*Field required';
  requiredPhoneField = '*9 digits number required';
  selectedGender = '';
  currentYear =  new Date().getFullYear();
  accountForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.accountForm = fb.group({
      'userName' : [null, Validators.required],
      'userPhone': [null, Validators.compose([Validators.required, Validators.pattern('[0-9 ]{11}')])],
      'gender': '',
      'countryPrefix': '',
      'birthDay': '',
      'birthMonth': '',
      'birthYear': ''
    });
  }

  ngOnInit() {
    this.accountForm.controls['countryPrefix'].patchValue('48');
  }

  radioSelected(value): void {
      this.selectedGender = value;
  }

  validateLength(value, length): boolean {
    if (value.length >= length ) {
      return false;
    }
  }

  addSpaceAfterThirdDigit(value): void {
    if (value.length > 0) {
      value = value.split(' ').join('').match(new RegExp('.{1,3}', 'g')).join(' ');
      this.accountForm.controls['userPhone'].patchValue(value);
    }
  }

  formSubmit(value: any): void {
    if (this.accountForm.valid) {
      this.accountForm.reset();
    }else {
      this.accountForm.controls['userName'].markAsTouched();
      this.accountForm.controls['userPhone'].markAsTouched();
    }
  }
}
