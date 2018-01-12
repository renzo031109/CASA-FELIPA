import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSlideToggleModule

} from '@angular/material';

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSlideToggleModule
 
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})

export class AppMaterialModule { }