import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Ingredient} from "../../shared/ingredient.module";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeDetails:RecipeModel;
  currentRecipeId:number;

  constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.currentRecipeId = +data['id'];
      this.recipeDetails = this.recipeService.getRecipe(+data['id']);
    });
  }

  onAddToShoppingList(ingredients:Ingredient[]){
    this.recipeService.addToShoppingList(ingredients);
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.currentRecipeId);
    this.router.navigate(['/']);
  }
}
