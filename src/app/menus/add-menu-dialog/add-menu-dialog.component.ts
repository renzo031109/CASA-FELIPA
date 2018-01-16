import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-add-menu-dialog',
  templateUrl: './add-menu-dialog.component.html',
  styleUrls: ['./add-menu-dialog.component.scss']
})
export class AddMenuDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddMenuDialogComponent>) { }

  ngOnInit() {
  }

}
