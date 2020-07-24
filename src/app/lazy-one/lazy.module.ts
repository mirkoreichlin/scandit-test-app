import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyComponent} from './lazy.component';
import {ScannerModule} from '../scanner/scanner.module';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: LazyComponent
  }
];

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    ScannerModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule {
}
