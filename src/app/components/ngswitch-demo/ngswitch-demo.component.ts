import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-demo',
  templateUrl: './ngswitch-demo.component.html',
  styleUrls: ['./ngswitch-demo.component.css']
})
export class NgswitchDemoComponent implements OnInit {

  choice = 1;

  constructor() { }

  ngOnInit() {
  }

  setChoice(choice){
    this.choice = choice;
  }

}
