import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScanditSdkModule} from 'scandit-sdk-angular';
import {ScannerComponent} from './scanner.component';

const LICENSE_KEY = 'licensekey';
const ENGINE_LOCATION = '/assets/scandit/';

@NgModule({
  declarations: [
    ScannerComponent
  ],
  imports: [
    CommonModule,
    ScanditSdkModule.forRoot(LICENSE_KEY, {
      engineLocation: ENGINE_LOCATION,
      preloadEngine: true,
      preloadBlurryRecognition: true
    }),
  ],
  exports: [
    ScannerComponent
  ]
})
export class ScannerModule { }
