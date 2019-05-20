import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import {TableBasicExample} from "./app/table-basic/table-basic-example";
import {CdkTableBasicExample} from "./app/CDK-table/cdk-table-basic-example";
import { TableInProjectComponent } from './app/table-in-project/table-in-project.component';
import { StickyTableComponent } from './app/sticky-table/sticky-table.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [TableBasicExample, CdkTableBasicExample, TableInProjectComponent],
  declarations: [TableBasicExample, CdkTableBasicExample, TableInProjectComponent, StickyTableComponent],
  bootstrap: [TableInProjectComponent, StickyTableComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

