import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-items',
  templateUrl: './sports-items.component.html',
  styleUrls: ['./sports-items.component.scss']
})
export class SportsItemsComponent implements OnInit {
  title = 'Sports Arena!';
  constructor() { }

  ngOnInit() {
  }

}
