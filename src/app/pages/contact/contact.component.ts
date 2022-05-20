import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  NumberMax = 20;
  isValid = false;
  iSend = false;
  constructor() { }

  ngOnInit(): void {
  }
  onChangeformValid(evt: any) {
    this.isValid = evt;
    if ( !evt ) {
      this.iSend = false;
    }
  }
  onChangeSend(evt: any) {
    this.iSend = evt;
  }

}
