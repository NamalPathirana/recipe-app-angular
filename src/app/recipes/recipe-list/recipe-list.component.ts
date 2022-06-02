import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes: RecipeModel[] = [];
  recipeChangeSubscription:Subscription;

  constructor(private recipesService:RecipeService) {
    this.recipes = recipesService.getRecipes();
  }

  ngOnInit(): void {
    this.recipeChangeSubscription = this.recipesService.recipeChangeEmitter.subscribe(
      data=>{
        this.recipes = data;
      }
    );
  }

  ngOnDestroy() {
    this.recipeChangeSubscription.unsubscribe();
  }

}
