import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() onClick = new EventEmitter<{void}>();
  @Input() recipe: RecipeModel;

  constructor() {
  }

  ngOnInit(): void {
  }

  onItemClick() {
    this.onClick.emit();
  }

}
