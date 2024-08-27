import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingPageRoutingModule } from './listing-routing.module';

import { ListingPage } from './listing.page';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';
import { CategoryIconComponent } from 'src/app/components/category-icon/category-icon.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ListingPageRoutingModule],
  declarations: [ListingPage, SearchbarComponent, CategoryIconComponent],
})
export class ListingPageModule {}
