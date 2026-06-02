import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('property-binding');

  widthButton1 = '110px';
  widthButton2 = 130;
  stylesObj = {
    width: '160px',
    backgroundColor: 'grey',
  };

  updateStyleObj(){
    console.log('updateStyleObj');
    this.stylesObj.width = '170px';
    this.stylesObj.backgroundColor = 'lightblue';
  }

  updateStyleObjectCorrect(){
    console.log('updateStyleObjectCorrect');

    this.stylesObj = {
      width: '170px',
      backgroundColor: 'lightblue',
    };
  }

  updateWidth(){
    this.widthButton2 = 200;
  }
}
