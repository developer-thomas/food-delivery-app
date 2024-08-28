import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    ButtonModule,
  ],
  declarations: [CartPage, CartItemComponent],
})
export class CartPageModule {}
