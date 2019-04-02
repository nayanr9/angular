import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.css']
})
export class SimpleComponentComponent implements OnInit {

  constructor() { }

  title: string;
  info: string;

  ngOnInit() {
    this.title = 'This is testing sample app.!';
    this.info = 'This is the info element of the same page.!'
  }

}
