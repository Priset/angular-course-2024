import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserCardComponent} from "./user-card/user-card.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {HistoryComponent} from "./history/history.component";

interface IPerson {
  name:string
  lastName: string
  age?: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, CalculatorComponent, HistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  result:number = 0;
  title:number = 80;
  history: number[] = [];
  animals:string[] = ['a','b','c','d','e','f','g']

  person: IPerson = {
    name: 'Juan',
    lastName: 'Perez',
    age: 25,
  }

  students:number[] = [1,2,3,4,5,6]
  parents:number[] = [7,8,9,10]

  var1 = 0
  var2 = null
  var3 = 'hola'

  constructor(){
    const { name, age } = this.person
    console.log('desestructuracion: ', name, age)

    let both = [...this.students, ...this.parents]
    console.log('spread operator: ', both)

    console.log('REST operator: ', this.sum(2,4,6))

    console.log('Nullish Coalescing: ', this.var1 ?? this.var3)
    console.log('OR: ',this.var1 || this.var2)

    //console.log('substract ', this.substract(8,4))

    //console.log('MAP:', this.animals.map( (animal:string) => ( animal + 'new')    ))
    //console.log('FOREACH:', this.animals.forEach( (animal) => ( animal + 'new')    ))
    //console.log('FIND', this.animals.find((animal)=>  animal === 'z'))
    //console.log('FILTER', this.animals.filter((animal)=>  animal === 'z'))
    //console.log('INDEXOF', this.animals.indexOf('c'))
  }

  public sum(...persons:number[]){
    //return persons[0] + persons[1]
    return persons.reduce((acc, current) => acc + current)
  }

  public sum2(num1: number, num2: number): number {
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

  public receiveData(data:any){
    console.log('Print data: ', data)
  }

  public onResult(event:any){
    console.log('event of child: ', event)
    this.result = event
    this.history.push(event);
  }

}
