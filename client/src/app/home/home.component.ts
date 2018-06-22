import { Component, OnInit, Injectable } from '@angular/core';
import { AvailService } from '../avail.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

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

	constructor(private availService: AvailService, private snackBar: MatSnackBar) {
		this.allowedLanguages = [
			{ value: 'pt', viewValue: 'Português' },
			{ value: 'en', viewValue: 'Inglês' }
		];
		this.fullData = [];
		this.dataForShow = "";
	}

	ngOnInit() {
	}

	form = new FormGroup({
		username: new FormControl('', [
			Validators.required
		]),
		language: new FormControl('', [
			Validators.required
		])
	});

	getPersona() {
		if (this.form.invalid){
			this.snackBar.open("Poxa, os dados submetidos estão incorretos...", "Fechar", {
				duration: 5000
			  }
			);
		}

		this.dataForShow = "";
		this.availService.getPersonality(this.form.get('username').value, this.form.get('language').value)
			.subscribe((res) => {
				this.fullData = [];
				this.dataForShow = "";
				this.fullData.title = "Personality";
				this.dataForShow += "<center><b>Personality</b><br>"
				res.personality.forEach(element => {
					this.fullData.push({
						name: element.name,
						percentile: element.percentile
					});
					this.dataForShow += `<b>${element.name}</b>:  ${element.percentile}<br>`
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
