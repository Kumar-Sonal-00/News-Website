import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,AbstractControl, ValidatorFn } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  messageForm = new FormGroup({
    name: new FormControl<string | null>("", Validators.required),
    email: new FormControl<string | null>("", [Validators.required, Validators.email, emailDomainValidator('gmail.com')]),
    message: new FormControl<string | null>("", Validators.required),
  });
  submitted = true;
  success = true;

  constructor(private _snackBar: MatSnackBar){}
  ngOnInit() {}

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      this.openSnackBar('Please fill out all required fields!');
      return;
    }
    this.success = true;
    console.log("form submitted");
    this.openSnackBar('Form submitted successfully!');
    this.messageForm.reset();
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar']
    });
  }

}
export function emailDomainValidator(domainName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const email: string = control.value;
    const domain = email.substring(email.lastIndexOf('@') + 1);
    if (email === '' || domain.toLowerCase() === domainName.toLowerCase()) {
      return null;
    } else {
      return { 'invalidDomain': true };
    }
  };
}