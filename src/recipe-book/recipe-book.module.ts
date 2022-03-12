import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeRoutingModule } from './recipe-book-routing.module';



@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ]
})
export class RecipeBookModule { }
