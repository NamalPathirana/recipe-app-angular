import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../shoppingList.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.shoppingListService.addIngredient(
      {
        name: this.nameInput.nativeElement.value,
        amount: this.amountInput.nativeElement.value
      }
    );
  }

  onDelete() {
  }

  onClear() {
    this.nameInput.nativeElement.value = ''
    this.amountInput.nativeElement.value = ''
  }

}
