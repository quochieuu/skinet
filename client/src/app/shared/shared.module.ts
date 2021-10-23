import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PaginationModule } from 'ngx-bootstrap/pagination'
import { PagerComponent } from './components/pager/pager.component';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';

@NgModule({
  declarations: [
    [PagingHeaderComponent, PagerComponent],
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports: [
      PaginationModule,
      PagingHeaderComponent,
      PagerComponent
  ]
})
export class SharedModule { }