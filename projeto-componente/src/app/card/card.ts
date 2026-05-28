import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano{
  infos: IInfos;
}

interface IInfos{
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  encapsulation: ViewEncapsulation.None
})
export class Card {
  // @ts-ignore
  plano: Iplano = {
    infos: {
      tipo: "Simples",
      preco: 100
    }
  };
}
