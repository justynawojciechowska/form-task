import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  formTitle = 'Take it all with you. Switch between devices, and pick up.';
  @Input() gender: string;
  public selectedGender = '';

  radioSelected(value): void {
      this.selectedGender = value;
  }

  formSubmit(): void {
  }
}
