import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  NavOpened = false;
  constructor(private router: Router) {

    this.router.events.subscribe(event=>{
      // this.NavOpened = false;
    })
   }

  ngOnInit(): void {
  }
  toggleNav(){
    this.NavOpened = !this.NavOpened;
  }
}
