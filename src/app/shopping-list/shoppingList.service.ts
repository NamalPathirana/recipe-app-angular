import {Ingredient} from "../shared/ingredient.module";
import {EventEmitter} from "@angular/core";


export class ShoppingListService {
  ingredients:Ingredient[] = [
    new Ingredient('apple',10),
    new Ingredient('Tomatoes',5)
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients():Ingredient[]{
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
  }

  onAddToShoppingList(ingredients:Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.ingredients.push(ingredient);
    // };
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
