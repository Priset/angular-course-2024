import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:number = 80;

  constructor(){
    console.log('substract ', this.substract(8,4))
  }

  public sum(num1: number, num2: number): number {
    return num1 + num2 //a veces pide punto y coma y a veces no
  }

  public substract(num1: number, num2: number): number{
    return num1 - num2
  }

  public getArray(): void {
    const person: number[] = [1, 2, 3, 4, 5];
    const evenPersons = person.filter(p => p % 2 === 0);
    for (let i = 0; i < evenPersons.length; i++) {
      console.log('person = ', evenPersons[i]);
    }
  }
}
