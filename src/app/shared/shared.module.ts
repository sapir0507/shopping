import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export class Ingredient {
  constructor(public name: string, public amount: number){}
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
