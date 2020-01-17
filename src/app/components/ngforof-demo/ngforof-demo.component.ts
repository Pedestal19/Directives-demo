import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforof-demo',
  templateUrl: './ngforof-demo.component.html',
  styleUrls: ['./ngforof-demo.component.css']
})
export class NgforofDemoComponent implements OnInit {

  people: Array<any>;
  imgStyles = {
    'height.px': 100,
    'border-radius.px' : 5,
    'width.px' : 100,
    'margin' : '10px' 
  }

  constructor() { }

  ngOnInit() {
    this.people = [
      {name: 'Hosanna', age: 45, city: 'Abuja', picture: '/assets/images/hosanna.jpg'},
      {name: 'Gabe', age: 45, city: 'Abuja', picture: '/assets/images/gabe.jpg'},
      {name: 'Oji', age: 45, city: 'Abuja', picture: '/assets/images/oji.jpg'},
      {name: 'Moninseh', age: 45, city: 'Abuja', picture: '/assets/images/moninseh.jpg'},

    ]
  }

}
