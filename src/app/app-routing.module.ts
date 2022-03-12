import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; 
import { ShoppingListComponent } from './../shopping-list/shopping-list.component';
import { RecipeBookComponent } from './../recipe-book/recipe-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'shoppingList', component: ShoppingListComponent },
  { path:'recipeBook', component: RecipeBookComponent },
  { path:'', redirectTo: '/home', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
