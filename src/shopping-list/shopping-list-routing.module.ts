import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list.component';


const Shoppingroutes: Routes = [
  { 
      path:'shoppingList',
      children:[
        {
          path: '', component: ShoppingListComponent
        },
        {
          path: 'list', component: ListComponent
        },
        {
          path: 'ingredient', component:  IngredientComponent
        },
        {
          path: 'edit', component:  ShoppingListEditComponent
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(Shoppingroutes)], 
  exports: [RouterModule]
})
export class ShopeRoutingModule { }
