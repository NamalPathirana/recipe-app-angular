import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  @Output() onIngredientAdd = new EventEmitter<{ name: string, amount: number }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.onIngredientAdd.emit(
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
