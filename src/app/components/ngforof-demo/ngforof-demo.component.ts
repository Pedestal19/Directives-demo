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
      {name: 'Gabe', age: 15, city: 'Abuja', picture: '/assets/images/gabe.jpg'},
      {name: 'Oji', age: 5, city: 'Abuja', picture: '/assets/images/oji.jpg'},
      {name: 'Moninseh', age: 19, city: 'Abuja', picture: '/assets/images/moninseh.jpg'},

    ]
  }

  getCssClass(age){
    if(age>18){
      return 'text-success'
    }
    else{
      return 'text-danger'
    }
  }

  deletePerson(index){
    this.people.splice(index, 1);
  }

}
