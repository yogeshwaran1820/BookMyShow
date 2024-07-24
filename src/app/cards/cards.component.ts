import { Component } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  myCondition:any = true
  // hide(){
  //   this.myCondition = false
  // }

  seeall(){
    this.myCondition = false
  }

  
}
