import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Ingredient} from "../../shared/ingredient.module";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeDetails:RecipeModel;

  constructor(private recipeService:RecipeService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.recipeDetails = this.recipeService.getRecipe(+data['id']);
    });
  }

  onAddToShoppingList(ingredients:Ingredient[]){
    this.recipeService.addToShoppingList(ingredients);
  }

}
