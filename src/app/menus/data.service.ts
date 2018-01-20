import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DataType } from './models/data-type';

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
    this.menuDoc = this.afs.doc(`items/${menu.id}`);
    this.menuDoc.delete();
  }

}
