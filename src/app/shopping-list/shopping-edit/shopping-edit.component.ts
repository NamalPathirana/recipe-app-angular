import {Component, ElementRef, OnChanges, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../shoppingList.service";
import {NgForm} from "@angular/forms";
import {Ingredient} from "../../shared/ingredient.module";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f',{static:false}) listEditForm:NgForm;
  editMode = false;
  editIndex:number;
  editingItem:Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.shoppingListService.startedEditing.subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editIndex = index;
        this.editingItem = this.shoppingListService.getIngredientByIndex(index);
        this.listEditForm.setValue({
          'name':this.editingItem.name,
          'amount':this.editingItem.amount
        });
      }
    );
  }

  onAdd() {
    const value = this.listEditForm.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingListService.onUpdateIngredient(this.editIndex,newIngredient);
    }else{
      this.shoppingListService.addIngredient(
        newIngredient
      );
      console.log(this.listEditForm);
    }
    this.listEditForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.shoppingListService.onDeleteIngredient(this.editIndex);
  }

  onClear() {
    this.listEditForm.reset();
    this.editMode = false;
  }

}
