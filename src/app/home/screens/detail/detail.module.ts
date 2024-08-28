import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { BadgeComponent } from 'src/app/components/badge/badge.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    ButtonModule,
  ],
  declarations: [DetailPage, BadgeComponent],
})
export class DetailPageModule {}
