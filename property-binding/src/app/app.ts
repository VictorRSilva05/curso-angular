import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('property-binding');
  inputText = "Texto Inicial Alterado";
  inputType = "text";
  isDisabled = false;

  enableInput(){
    this.isDisabled = false;
  }

  disableInput(){
    this.isDisabled = true;
  }

  setPasswordTypeInput(){
    this.inputType = 'password';
  }

  setTextTypeInput(){
    this.inputType = 'text';
  }

  logInputText(){
    console.log(this.inputText)
  }
}
