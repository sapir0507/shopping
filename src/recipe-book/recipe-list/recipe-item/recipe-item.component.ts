import { Component, Input, OnInit, Output } from '@angular/core';
import { IRecipe, Recipe } from 'src/recipe-book/recipe.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() item: Recipe | undefined;
  constructor() {
   
   }

  ngOnInit(): void {
  }

}
