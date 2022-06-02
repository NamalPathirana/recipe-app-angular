import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.module";
import {ShoppingListService} from "./shoppingList.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients:Ingredient[] = [];
  ingredientSubscription:Subscription;

  constructor(private shoppingListService:ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      ingredients=>this.ingredients = ingredients
    )
  }

  onEdit(index:number){
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.ingredientSubscription.unsubscribe();
  }

}
