import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CockpitRoutingModule } from './cockpit-routing.module';
import { CockpitComponent } from './cockpit.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CockpitComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
   
    // FormGroup,
    // FormControl,

    CockpitRoutingModule
  ],
  exports:[
    CockpitComponent
  ]
})
export class CockpitModule { }
