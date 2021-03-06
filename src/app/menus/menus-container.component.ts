import { Component } from '@angular/core';

@Component({
  selector: 'menus-container',
  template: `
    <mat-tab-group color="accent">
      <mat-tab label="Master Detail">
          <div fxFlex class="master-detail-container">
            <app-master-detail fxFlex></app-master-detail>
          </div>
        </mat-tab>
      <mat-tab label="List">
        <div fxFlex class="menus-list-container">
          <app-list fxFlex></app-list>
        </div>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [`
    .master-detail-container {
      height: calc(100vh - 113px);
      overflow: hidden;
      padding: 1rem;
    }

    .menus-list-container {
      height: 100%;
      padding: 1rem;
      overflow-x: hidden;
      overflow-y: auto;
    }
  `]
})
export class MenusContainerComponent {}
