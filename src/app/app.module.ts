import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {ScannerModule} from './scanner/scanner.module';

const ROUTES_LIST: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy-one/lazy.module').then(mod => mod.LazyModule)
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ScannerModule,
    RouterModule.forRoot(ROUTES_LIST)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
