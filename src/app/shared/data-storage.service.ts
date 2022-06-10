import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeModel} from "../recipes/recipe.model";
import {RecipeService} from "../recipes/recipe.service";
import {map, tap} from "rxjs";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipes() {
    const recipes: RecipeModel[] = this.recipeService.getRecipes();
    this.http.put('https://ng-course-recipe-book-7c6c5-default-rtdb.firebaseio.com/recipes.json',
      recipes).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  fetchRecipes() {
    return this.http.get<RecipeModel[]>('https://ng-course-recipe-book-7c6c5-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map((data) => {
          return data.map(item => {
            return {...item, ingredients: item.ingredients ? item.ingredients : []}
          });
        }),
        tap(response => {
          this.recipeService.setRecipes(response);
        }))
  }

}
