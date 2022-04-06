import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name:string = "CodeCart";
  public message = "Welcome to CodeCart";
  public person = {
    "firstName": "Black",
    "lastName": "Friz"
  }
  public date = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
