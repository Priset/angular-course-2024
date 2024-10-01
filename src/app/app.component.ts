import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserCardComponent} from "./user-card/user-card.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {HistoryComponent} from "./history/history.component";
import {CommonModule} from "@angular/common";
import {PersonaComponent} from "./persona/persona.component";

export interface IPerson {
  name: string;
  gender: 'male' | 'female';
  age: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, CalculatorComponent, HistoryComponent, CommonModule, PersonaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  users = [{ name: 'abc', 'email': 'abc@gmail.com' }, { name: 'dfg', 'email': 'dfg@gmail.com' }]
  selectedUser:any = this.users[0];

  userCardCreated: boolean = true

  result:number = 0;

  persons: IPerson[] = [
    { name: 'Karim', gender: 'female', age: 19 },
    { name: 'Juan', gender: 'male', age: 15 },
    { name: 'Ana', gender: 'female', age: 20 },
    { name: 'Lucia', gender: 'female', age: 25 },
  ];

  get totalFemales(): number {
    return this.persons.filter(person => person.gender === 'female').length;
  }

  get totalMales(): number {
    return this.persons.filter(person => person.gender === 'male').length;
  }

  get totalDiscounts(): number {
    return this.persons.filter(person => person.age > 18).length;
  }

  deletePersonsWithDiscount(): void {
    this.persons = this.persons.filter(person => person.age <= 18);
  }

  hasDiscount(person: IPerson): boolean {
    return person.age > 18;
  }

  public receiveData(data:any){
    console.log('Print in father component: ', data)
  }
}
