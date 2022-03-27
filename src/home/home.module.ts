import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShoppingListModule } from 'src/shopping-list/shopping-list.module';
import { RecipeBookModule } from 'src/recipe-book/recipe-book.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RecipeBookModule,
    ShoppingListModule
  ]
})
export class HomeModule { }
