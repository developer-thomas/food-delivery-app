import { Injectable } from '@angular/core';
import { foods } from '../data/food.data';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoods() {
    return foods;
  }

  getFoodById(id: number | string | null): Food {
    let curId = Number(id);
    const food = this.getFoods().find((food) => food.id === curId);
    if (food) {
      return food;
    } else {
      return {
        id: 0,
        title: 'Não encontrado',
        price: 0,
        image: '',
        description: 'Produto não encontrado!',
        category: '',
      };
    }
  }
}
