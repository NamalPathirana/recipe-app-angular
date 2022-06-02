import {RecipeModel} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.module";
import {ShoppingListService} from "../shopping-list/shoppingList.service";
import {Subject} from "rxjs";

@Injectable({providedIn:'root'})
export class RecipeService {

  recipeChangeEmitter = new Subject<RecipeModel[]>();

  recipes: RecipeModel[] = [
    new RecipeModel(0,'A test recipe', 'definitely a test',
      'https://img.delicious.com.au/' +
      'fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'
      ,[new Ingredient('tomato',2),new Ingredient('chicken',1)]
    ),
    new RecipeModel(1,'A new Dish', 'Food association approved',
      'https://img.delicious.com.au/' +
      'fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'
      ,[new Ingredient('basil',4),new Ingredient('cheese',1)]
    ),
    new RecipeModel(2,'breakfast', 'new york times',
      'https://img.delicious.com.au/' +
      'fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
      [new Ingredient('olive',5),new Ingredient('pepper',1)])
  ];

  constructor(private shoppingList:ShoppingListService) {
  }


  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id:number):RecipeModel{
    return this.recipes.find(item=>item.id===id);
  }

  addToShoppingList(ingredient:Ingredient[]){
    this.shoppingList.onAddToShoppingList(ingredient);
  }

  addRecipe(newRecipe:RecipeModel){
    const nextId = this.recipes.length == null?0:this.recipes.length+1
    const idCorrectedRecipe = {...newRecipe,id:nextId}
    this.recipes.push(idCorrectedRecipe);
    console.log(this.recipes);
    this.recipeChangeEmitter.next(this.recipes);
  }

  updateRecipe(index:number,newRecipe:RecipeModel){
    const recipeId = index;
    const idCorrectedRecipe = {...newRecipe,id:recipeId}
    this.recipes[index] = idCorrectedRecipe;
    this.recipeChangeEmitter.next(this.recipes);
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipeChangeEmitter.next(this.recipes);
  }
}
