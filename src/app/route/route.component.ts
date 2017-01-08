import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  private tiles;
  constructor() { }

  ngOnInit() {
    this.tiles = [
      { text: 'One', cols: 3, rows: 1, color: '#eee' },
      { text: 'Two', cols: 1, rows: 2, color: '#ddd' },
      { text: 'Three', cols: 1, rows: 1, color: '#ccc' },
      { text: 'Four', cols: 2, rows: 1, color: '#bbb' },
    ];
  }

}
