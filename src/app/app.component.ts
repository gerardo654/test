import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    this.openDialog();
  }
  openDialog() {
    this.dialog.open(WelcomeComponent, {});
  }
}
