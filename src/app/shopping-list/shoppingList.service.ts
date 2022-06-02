import {Ingredient} from "../shared/ingredient.module";
import {Subject} from "rxjs";


export class ShoppingListService {

  startedEditing = new Subject<number>();
  ingredients:Ingredient[] = [
    new Ingredient('apple',10),
    new Ingredient('Tomatoes',5)
  ];

  ingredientsChanged = new Subject<Ingredient[]>();

  getIngredients():Ingredient[]{
    return this.ingredients.slice();
  }

  getIngredientByIndex(index:number):Ingredient{
    return this.ingredients[index];
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  onAddToShoppingList(ingredients:Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.ingredients.push(ingredient);
    // };
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  onUpdateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  onDeleteIngredient(index:number) {
    this.ingredients.splice(index,1);
    console.log(index)
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
