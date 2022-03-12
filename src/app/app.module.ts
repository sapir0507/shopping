import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ShopeRoutingModule } from '../shopping-list/shopping-list-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeBookModule } from '../recipe-book/recipe-book.module';
import { ShoppingListModule } from '../shopping-list/shopping-list.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RecipeRoutingModule } from 'src/recipe-book/recipe-book-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    ShopeRoutingModule,/*go before the root*/
    RecipeRoutingModule,
    AppRoutingModule,
    RecipeBookModule,
    ShoppingListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
