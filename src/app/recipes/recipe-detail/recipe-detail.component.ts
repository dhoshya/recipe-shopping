import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToSL(){
    this.recipeService.addIngredientToSL(this.recipe.ingredient);
  }

  onEditRecipe(){
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});

  }

  onDelete(){
     this.recipeService.deleteRecipe(this.id);
     this.router.navigate(['/recipes']);
  }



}