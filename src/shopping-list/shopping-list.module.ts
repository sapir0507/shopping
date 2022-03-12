import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './ingredient/ingredient.component';



@NgModule({
  declarations: [
    ShoppingListEditComponent,
    IngredientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingListModule { }
