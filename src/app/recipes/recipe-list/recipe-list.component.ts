import {Component, OnInit} from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('A test recipe', 'definitely a test', 'https://img.delicious.com.au/' +
      'fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
    new RecipeModel('A test recipe', 'definitely a test', 'https://img.delicious.com.au/' +
      'fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg')];

  constructor() {
  }

  ngOnInit(): void {
  }

}
