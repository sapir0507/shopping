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
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent

  ],
  imports: [

    /* external modules */
    BrowserModule,
    RouterModule,
    /* end external modules */
    
    /* routing */ 
    RecipeRoutingModule,/* external paths go before the root*/
    ShopeRoutingModule,

    AppRoutingModule,
    /* end routhing */

    /* in project modules */ 
    RecipeBookModule,
    ShoppingListModule
    /* end project modules */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
