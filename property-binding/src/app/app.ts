import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('property-binding');
  buttontitle = 'Título do botão';
  buttonDisable = false;

  onButtonClick(){
    this.buttontitle = 'Título ALTERADO';
    this.buttonDisable = !this.buttonDisable;
  }
}
