import { Injectable } from '@angular/core';
import { foods } from '../data/food.data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoods() {
    return foods;
  }

  getFoodById(id: number) {
    return this.getFoods().find((food) => food.id === id);
  }
}
