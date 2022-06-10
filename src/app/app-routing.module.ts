import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RecipeDetailsComponent} from "./recipes/recipe-details/recipe-details.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {RecipesResolverService} from "./recipes/recipes-resolver.service";


const appRoute:Routes = [
  {path:'',redirectTo:'/recipe',pathMatch:'full'},
  {path:'recipe',component:RecipesComponent,children:[
      {path:'',component:ErrorPageComponent,data:{message:'Please select a recipe!'}},
      {path:'new',component:RecipeEditComponent},
      {path:':id',component:RecipeDetailsComponent,resolve:{test:RecipesResolverService}},
      {path:':id/edit',component:RecipeEditComponent,resolve:[RecipesResolverService]}
    ]},
  {path:'shopping-list',component:ShoppingListComponent}
]

@NgModule(
  {
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule{}
