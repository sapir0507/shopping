import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; 
import { ShoppingListComponent } from './../shopping-list/shopping-list.component';
import { RecipeBookComponent } from './../recipe-book/recipe-book.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'shoppingList', component: ShoppingListComponent},
  {path:'recipeBook', component: RecipeBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
