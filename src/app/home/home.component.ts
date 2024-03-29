import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  foods:food[] = [];
  constructor(private foodService:FoodService ,private route:ActivatedRoute ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      /*console.log("list ",this.foods);*/
      if(params['searchTerm'])
      this.foods=this.foodService.getAllfoodBySearchTerm(params['searchTerm']);

      else if(params['tag'])
      this.foods=this.foodService.getAllFoodByTag(params['tag'])
    else
      this.foods=this.foodService.getAll();
    })
  
    

  }
  
}


 

