import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DataType } from '../models/data-type';
import { DataService } from '../../menus/data.service';

import { Upload } from '../models/upload';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-add-menu-dialog',
  templateUrl: './add-menu-dialog.component.html',
  styleUrls: ['./add-menu-dialog.component.scss']
})
export class AddMenuDialogComponent implements OnInit {

  menuName: string;
  description: string;
  group: string;
  price: number;
  image: any;

  constructor(private dialogRef: MatDialogRef<AddMenuDialogComponent>,
              private dataService: DataService,
              // private uploadService: UploadService
              ) { }

  ngOnInit() {
  }

  onSubmit() {
    let listing = {
      menuName: this.menuName,
      description: this.description,
      group: this.group,
      price: this.price
    };    
    console.log(listing);
  //  this.uploadService.addListing(listing);

  }
////

// selectFile(event) {
//   this.selectedFiles = event.target.files;
// }

// upload() {
//   const file = this.selectedFiles.item(0);
//   this.currentFileUpload = new Upload(file);
//   this.dataService.pushFileToStorage(this.currentFileUpload, this.progress)
// }


}
