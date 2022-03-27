import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeRoutingModule } from './recipe-book-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';



@NgModule({
  declarations: [
    /* start created components */
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent
    /* end created components */
  ],
  imports: [
    /* start external modules */
    CommonModule,
    /* end external modules */

    /* start routing modules */
    RecipeRoutingModule
    /* end routing modules */
  ]
  ,
  exports:[
    RecipeBookComponent
  ]
})
export class RecipeBookModule { }
