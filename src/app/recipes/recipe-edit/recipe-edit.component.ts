import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode = false;
  recipeForm:FormGroup;

  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = +params['id'];  // remember must be turned to a number; as it comes as a string
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  onSubmit(){
    console.log(this.recipeForm);
    // const updatedRecipe = new RecipeModel(this.id
    //   ,this.recipeForm.value['name']
    //   ,this.recipeForm.value['description']
    //   ,this.recipeForm.value['imagePath']
    //   ,this.recipeForm.value['ingredients']
    // );
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  getIngredientsControls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name':new FormControl(null,Validators.required),
      'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+\d*$/)])
    }));
  }

  onRemoveIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  private initForm(){
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';
    let recipeIngredient = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe["ingredients"]){
        for(let ingredient of recipe.ingredients){
          recipeIngredient.push(
            new FormGroup({
              'name':new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,
                [Validators.required,Validators.pattern(/^[1-9]+\d*$/)]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImage,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients': recipeIngredient
    })

  }

}
