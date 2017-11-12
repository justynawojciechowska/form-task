import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formTitle = 'Take it all with you. Switch between devices, and pick up.';
  requiredField = '*Field required';
  requiredPhoneField = '*6 digits number required';
  selectedGender = '';
  currentYear =  new Date().getFullYear();
  accountForm: FormGroup;
  userName: FormControl;
  userPhone: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.userName = new FormControl('', Validators.required);
    this.userPhone = new FormControl('', Validators.required);
  }

  createForm() {
    this.accountForm = new FormGroup({
      userName: this.userName,
      userPhone: this.userPhone
    });
  }

  radioSelected(value): void {
      this.selectedGender = value;
  }

  formSubmit(): void {
    if (this.accountForm.valid) {
      this.accountForm.reset();
    }else {
    }
  }
}
