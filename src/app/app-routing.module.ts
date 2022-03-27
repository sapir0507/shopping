import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
// import { ShoppingListComponent } from './../shopping-list/shopping-list.component';
// import { RecipeBookComponent } from './../recipe-book/recipe-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path:'home', component: HomeComponent },
  // { path:'recipeBook', component: RecipeBookComponent },
  // { path:'shoppingList', component: ShoppingListComponent },
  {
    path: 'home',
    loadChildren: () => 
      import('../home/home-routing.module').then(m => m.HomeRoutingModule)
  },
  {
    path: 'recipeBook',
    loadChildren: () => 
      import('../recipe-book/recipe-book-routing.module').then(m => m.RecipeRoutingModule)
  },
  {
    path: 'shoppingList',
    loadChildren: () => 
      import('../shopping-list/shopping-list-routing.module').then(m => m.ShopeRoutingModule)
  },
  {
    path: 'cockpit',
    loadChildren: () => 
      import('src/session4/cockpit/cockpit-routing.module').then(m => m.CockpitRoutingModule)
  },
  { 
    path:'', 
    redirectTo: '/home', 
    pathMatch:'full' 
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
