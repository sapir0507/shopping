import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'
import { RecipeBookComponent } from "./recipe-book.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";


export interface IRecipe{
     name: string;
     description: string;
     imgPath: string;
}

export class Recipe{
    public recipe: IRecipe = {
        name: "",
        description: "",
        imgPath: ""
    };

    constructor(name: string, desc: string, ImgPath: string){
        this.recipe.name=name
        this.recipe.description=desc
        this.recipe.imgPath=ImgPath
    }
}