import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';



const Shoppingroutes: Routes = [
  { 
      path:'recipeBook',
      children:[
        {
          path: 'item', component: RecipeItemComponent 
        },
        {
          path: 'list', component: RecipeListComponent 
        }
      ]
  },
  // { path:'/shoppingListEdit', component:  ShoppingListEditComponent},
];

@NgModule({
    imports: [RouterModule.forChild(Shoppingroutes)], 
    exports: [RouterModule]
})
export class RecipeRoutingModule { }
