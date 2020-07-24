import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScanditSdkModule} from 'scandit-sdk-angular';
import {ScannerComponent} from './scanner.component';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: ScannerComponent
  },
];

@NgModule({
  declarations: [
    ScannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ScanditSdkModule // without loading the module at all, the scandit component is not available in our SubComponent
  ]
})
export class ScannerModule { }
