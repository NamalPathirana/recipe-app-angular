import {RecipeModel} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.module";
import {ShoppingListService} from "../shopping-list/shoppingList.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [
    new RecipeModel('A test recipe', 'definitely a test',
      'https://img.delicious.com.au/' +
      'fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'
      ,[new Ingredient('tomato',2),new Ingredient('chicken',1)]
    ),
    new RecipeModel('A new Dish', 'Food association approved',
      'https://img.delicious.com.au/' +
      'fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'
      ,[new Ingredient('basil',4),new Ingredient('cheese',1)]
    ),
    new RecipeModel('breakfast', 'new york times',
      'https://img.delicious.com.au/' +
      'fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
      [new Ingredient('olive',5),new Ingredient('pepper',1)])
  ];

  constructor(private shoppingList:ShoppingListService) {
  }


  getRecipes(){
    return this.recipes.slice();
  }

  addToShoppingList(ingredient:Ingredient[]){
    this.shoppingList.onAddToShoppingList(ingredient);
  }
}
