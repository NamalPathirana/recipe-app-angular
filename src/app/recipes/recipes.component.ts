import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "./recipe.model";
import {RecipeService} from "./recipe.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService:RecipeService) {
    // recipeService.recipeSelected.subscribe(
    //   recipe=> this.selectedRecipe = recipe
    // );
  }

  ngOnInit(): void {
  }

}
