import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerElementRoutingModule } from './server-element-routing.module';
import { ServerElementComponent } from './server-element.component';


@NgModule({
  declarations: [
    ServerElementComponent
  ],
  imports: [
    CommonModule,
    ServerElementRoutingModule
  ]
})
export class ServerElementModule { }
