import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DataType } from './models/data-type';
import { Upload } from './models/upload';


import * as firebase from 'firebase/app';

@Injectable()
export class DataService {
  menusCollection: AngularFirestoreCollection<DataType>;
  menus: Observable<DataType[]>;
  menuDoc: AngularFirestoreDocument<DataType>;

  constructor(private afs: AngularFirestore) {
    this.menusCollection = this.afs.collection('menus', ref => ref.orderBy('name', 'asc'));

    this.menus = this.menusCollection.snapshotChanges().map(changes => {
      return changes.map( datas => {
        const data = datas.payload.doc.data() as DataType;
        data.id = datas.payload.doc.id;
        return data;
      });
    });
  }

  getMenus() {
    return this.menus;
  }

  addMenu(menu: DataType) {
    this.menusCollection.add(menu);
  }

  deleteItem(menu: DataType) {
    this.menuDoc = this.afs.doc(`menus/${menu}`);
    this.menuDoc.delete();
  }


  //
  private basePath = '/menus';

  pushFileToStorage(fileUpload: Upload, progress: {percentage: number}) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        // fail
        console.log('may mali', error);
      },
      () => {
        // success
        fileUpload.url = uploadTask.snapshot.downloadURL;
        fileUpload.name = fileUpload.file.name;
        // this.saveFileData(fileUpload);
      }
    );
  }

  // private saveFileData(fileUpload: Upload) {
  //   this.db.list(`${this.basePath}/`).push(fileUpload);
  // }                         

}
