import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Ingredient} from "../../shared/ingredient.module";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipeDetails:RecipeModel;

  constructor(private recipeService:RecipeService) {}

  ngOnInit(): void {
  }

  onAddToShoppingList(ingredients:Ingredient[]){
    this.recipeService.addToShoppingList(ingredients);
  }

}
