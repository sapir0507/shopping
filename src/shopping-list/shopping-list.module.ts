import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShopeRoutingModule } from './shopping-list-routing.module';
import { ListComponent } from './list/list.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';



@NgModule({
  declarations: [
    ShoppingListComponent,
    ListComponent,
    IngredientComponent,
    ShoppingListEditComponent
  ],
  imports: [
    CommonModule,
    ShopeRoutingModule
  ]
})
export class ShoppingListModule { }
