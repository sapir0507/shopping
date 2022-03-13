import { NgModule } from '@angular/core';
import { ShopeRoutingModule } from './shopping-list-routing.module';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './ingredient/ingredient.component';



@NgModule({
  declarations: [
    /* start components */
    ShoppingListEditComponent,
    IngredientComponent
    /* end components */
  ],
  imports: [
    /* external modules */
    CommonModule,
    /* end external modules */

    /* created modules */
    ShopeRoutingModule,
    /* end created modules */

    /* routing module */
    RouterModule
    /* end routing module */
    
  ]
})
export class ShoppingListModule { }
