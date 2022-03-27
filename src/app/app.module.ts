import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ShopeRoutingModule } from '../shopping-list/shopping-list-routing.module';
import { RecipeRoutingModule } from '../recipe-book/recipe-book-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { RecipeBookModule } from '../recipe-book/recipe-book.module';
// import { ShoppingListModule } from '../shopping-list/shopping-list.module';
import { HomeModule } from 'src/home/home.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CockpitModule } from 'src/session4/cockpit/cockpit.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    NavbarComponent,
    NavBarComponent
  ],
  imports: [
    /* external modules */
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    /* end external modules */
    
    /* routing */ 
    RecipeRoutingModule,/* external paths go before the root*/
    ShopeRoutingModule,
    

    AppRoutingModule,
    /* end routhing */

    /* in project modules */ 
    HomeModule,
    CockpitModule
    /* end project modules */
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
