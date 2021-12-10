import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public searchFilter: any = '';
  public name: any;

  constructor(){}

  onInput(event : any)
  {
    console.log('event=',event.target.value);
    this.name =  event.target.value;

  }

  Students = [{
      "id": 1,
      "name": "Nathaniel Graham",
      "email": "nathaniel.graham@example.com",
      "date": "19-12-2021"
    },
    {
      "id": 2,
      "name": "Avery Adams",
      "email": "avery.adams@example.com",
      "date": "25-11-2020"
    },
    {
      "id": 3,
      "name": "Mario Stevens",
      "email": "mario.stevens@example.com"
    },
    {
      "id": 4,
      "name": "Constance Beck",
      "email": "constance.beck@example.com"
    },
    {
      "id": 5,
      "name": "Jimmie Little",
      "email": "jimmie.little@example.com"
    },
    {
      "id": 6,
      "name": "Avery Matthews",
      "email": "avery.matthews@example.com"
    },
    {
      "id": 7,
      "name": "Pat Sutton",
      "email": "pat.sutton@example.com"
    },
    {
      "id": 8,
      "name": "Danny Crawford",
      "email": "danny.crawford@example.com"
    },
    {
      "id": 9,
      "name": "Pearl Mccoy",
      "email": "pearl.mccoy@example.com"
    },
    {
      "id": 10,
      "name": "Flenn Wallace",
      "email": "flenn.wallace@example.com"
    }
  ]

}