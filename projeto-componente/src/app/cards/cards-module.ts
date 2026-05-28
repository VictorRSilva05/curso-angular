import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardButton } from '../card-button/card-button';
import { CardRoxoButton } from '../card-roxo-button/card-roxo-button';
import { CardRoxo } from '../card-roxo/card-roxo';
import { Card } from '../card/card';
import { CardButtonCancel } from '../card-button-cancel/card-button-cancel';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [ Card, CardRoxo, CardButton, CardRoxoButton, CardButtonCancel],
  imports: [CommonModule, MatSliderModule],
  exports:[Card, CardRoxo, CardButton, CardRoxoButton]
})
export class CardsModule {}
