import { NgModule } from '@angular/core';
import { ShopeRoutingModule } from './shopping-list-routing.module';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './ingredient/ingredient.component';



@NgModule({
  declarations: [
    ShoppingListEditComponent,
    IngredientComponent
  ],
  imports: [
    CommonModule,
    ShopeRoutingModule,
    RouterModule
    
  ]
})
export class ShoppingListModule { }
