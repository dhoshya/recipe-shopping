import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'IndiPizza',
      'A Thin Crust super-tasty Pizza',
      'http://m.kfoods.com/article/images/Thumbnails/Pizza-Step-By-Step-Recipe-Yummy-Pizza-Itna-Asan.jpeg',
      [
        new Ingredient('Pizza Dough',1),
        new Ingredient('Cheese',1),
        new Ingredient('Onion',1),
        new Ingredient('Capsicum',1)
      ]),
    new Recipe(
      'Big Indian Cheeseburger',
      'Pure Indian Spices in American Cheeseburger',
      'https://68.media.tumblr.com/8b4d921bca872cbe636f63096b35b23a/tumblr_nih7pge4IK1r38eolo1_500.jpg',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat Pattie',2),
        new Ingredient('Cheese Slices',3),
        new Ingredient('Pickel',2),
      ])];

  constructor(private listService: ShoppingListService){
  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToSL(ingredients: Ingredient[]){
    this.listService.addIngredients(ingredients);
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
     this.recipes.splice(index,1);
     this.recipesChanged.next(this.recipes.slice());
  }


}
