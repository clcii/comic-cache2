import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  NavOpened = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleNav(){
    this.NavOpened = !this.NavOpened;
  }
}
