import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface IPerson {
  name:string
  lastName: string
  age?: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:number = 80;
  animals:string[] = ['a','b','c','d','e','f','g']

  person: IPerson = {
    name: 'a',
    lastName: 'b'
  }

  constructor(){
    console.log('substract ', this.substract(8,4))

    console.log('MAP:', this.animals.map( (animal:string) => ( animal + 'new')    ))
    console.log('FOREACH:', this.animals.forEach( (animal) => ( animal + 'new')    ))
    console.log('FIND', this.animals.find((animal)=>  animal === 'z'))
    console.log('FILTER', this.animals.filter((animal)=>  animal === 'z'))
    console.log('INDEXOF', this.animals.indexOf('c'))
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

  //  function sumar(){
  //   return 1 + 2;
  //  }

  //  const suma = () => {
  //   return 1 + 2
  //  }


  //  function resta(){
  //   return 'hola' + a
  //  }

  // arrow functions
  //  const resta = () => ('hola' + a)

}
