import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private item$ = new BehaviorSubject<CartItem[]>([]);

  getCart() {
    return this.item$.asObservable();
  }

  addToCart(newItem: CartItem) {
    this.item$.next([...this.item$.getValue(), newItem]);
  }

  removeItem(id: number) {
    this.item$.next(this.item$.getValue().filter((item) => item.id !== id));
  }

  changeQuantity(quantity: number, id: number) {
    const items = this.item$.getValue();
    const index = items.findIndex((item) => item.id === id);
    items[index].quantity += quantity;
    this.item$.next(items);
  }

  getTotalAmount() {
    return this.item$.pipe(
      map((items) => {
        let total = 0;
        items.forEach((item) => {
          total += item.quantity * item.price;
        });

        return total;
      })
    );
  }
}
