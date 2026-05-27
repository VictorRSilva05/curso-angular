import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardButton } from '../card-button/card-button';
import { CardRoxoButton } from '../card-roxo-button/card-roxo-button';
import { CardRoxo } from '../card-roxo/card-roxo';
import { Card } from '../card/card';

@NgModule({
  declarations: [ Card, CardRoxo, CardButton, CardRoxoButton],
  imports: [CommonModule],
  exports:[Card, CardRoxo, CardButton, CardRoxoButton]
})
export class CardsModule {}
