import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] | null = [
    new Ingredient('apples', 5), 
    new Ingredient('bananas', 3), 
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
