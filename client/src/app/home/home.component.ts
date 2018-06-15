import { Component, OnInit, Injectable } from '@angular/core';
import { AvailService } from '../avail.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable()
export class HomeComponent implements OnInit {
  allowedLanguages;
  fullData;
  dataForShow;

  constructor(private availService: AvailService) {
    this.allowedLanguages = [
      {value: 'pt', viewValue: 'Português'},
      {value: 'us', viewValue: 'Inglês'},
    ];
    this.fullData = [];
    this.dataForShow = "";
  }

  ngOnInit() {
  }

  username = new FormControl('', [
    Validators.required
  ]);

  language = new FormControl('',[
    Validators.required
  ]);

  getPersona() {
    this.availService.getPersonality(this.username.value, this.language.value)
      .subscribe((res) => {
        this.fullData = [];
        this.dataForShow = "";
        this.fullData.title = "Personality";
        this.dataForShow += "<center><b>Personality</b><br>"
        res.personality.forEach(element => {
          this.fullData.push( {
            name: element.name,
            percentile: element.percentile
          });
          this.dataForShow += `<b>Personality</b>: ${element.name}:  ${element.percentile}<br>`
        });
        this.dataForShow += "</center>"
        console.log(this.fullData);
      },
      error => {
        console.log(error.statusText);
      }
    );
  }

}
