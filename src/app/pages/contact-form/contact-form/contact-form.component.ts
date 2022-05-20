import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() MaxTextArea: number = 0;
  @Output() IsValidEvent = new EventEmitter<Boolean>();
  @Output() HasBeenChecked = new EventEmitter<Boolean>();
  mostrarrpgres = false;
  form = this.fb.group({
    name: [null, [Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/)]],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, [
      Validators.required,
      Validators.pattern(/\-?\d*\.?\d{1,2}/),
      Validators.maxLength(12),
      Validators.minLength(12)]],
    message: [null]
  });

  constructor(private fb: FormBuilder,
              private service: ContactService) {}

  ngOnInit(): void {
    this.form.controls['message'].setValidators([
      Validators.maxLength(this.MaxTextArea),
      Validators.required,
      Validators.minLength(5)]);
    this.form.controls['message'].updateValueAndValidity()
  }
  onCheckValid() {
    this.IsValidEvent.emit(this.form.valid);
    return this.form.valid;
  }
  onSend() {
    this.mostrarrpgres = true;
    this.HasBeenChecked.emit(true);
    this.service.onSendFormContact(this.form.value).subscribe(
      next => {
        console.log(next);
        this.mostrarrpgres = false;
      }, error => {
        console.log(error);
        this.mostrarrpgres = false;
      }
    );
  }

}
