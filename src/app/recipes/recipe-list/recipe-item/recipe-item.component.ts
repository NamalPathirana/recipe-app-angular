import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor(private recipeService:RecipeService,private router:Router) {
  }

  ngOnInit(): void {
  }

  onItemClick() {
    // this.recipeService.recipeSelected.emit(this.recipe);
    // this.router.navigate(['/recipe',this.recipe.id]); //this won't allow activeLink to work
  }

}
