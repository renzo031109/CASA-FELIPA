import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DataType } from '../models/data-type';
import { DataService } from 'app/menus/data.service';

@Component({
  selector: 'app-add-menu-dialog',
  templateUrl: './add-menu-dialog.component.html',
  styleUrls: ['./add-menu-dialog.component.scss']
})
export class AddMenuDialogComponent implements OnInit {
  dataType: DataType = {
    id: '',
    name: '',
    description: '',
    group: '',
    price: 0,
    Image: ''
  };

  constructor(private dialogRef: MatDialogRef<AddMenuDialogComponent>,
              private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(dataType: DataType) {
    if (this.dataType.name !== '') {
      this.dataService.addMenu(this.dataType);
      // this.dataType.name = '';
      // this.dataType.description = '';
      // this.dataType.group = '';
      // this.dataType.price = 0;
      // this.dataType.Image = '';
    }
  }

}
