import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ScanditSdkModule} from 'scandit-sdk-angular';
import {RouterModule, Routes} from '@angular/router';

const LICENSE_KEY = 'license-key';
const ENGINE_LOCATION = '/assets/scandit/';

const ROUTES_LIST: Routes = [
  {
    path: '',
    loadChildren: () => import('./scanner/scanner.module').then(mod => mod.ScannerModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES_LIST),
    ScanditSdkModule.forRoot(LICENSE_KEY, {
      engineLocation: ENGINE_LOCATION,
      preloadEngine: true,
      preloadBlurryRecognition: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
