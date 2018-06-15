import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AvailService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: Http) { }

  getPersonality (username, language){
    return this.http.get(`${this.baseUrl}/api/${username}/${language}`)
      .map((res) => {
        return res.json();
      });

  }
}
