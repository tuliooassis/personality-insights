import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allowedLanguages;
  constructor() {
    this.allowedLanguages = [
      {value: 'pt', viewValue: 'Português'},
      {value: 'us', viewValue: 'Inglês'},
    ];
  }

  ngOnInit() {
  }

}
