import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// we build our component and use it in our HTML file
// we get values from './value.component.html'
@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})

// component which we build getting value from the class
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    // getting values from our Web API
    this.http.get('http://localhost:5000/api/values').subscribe(responce => {
      this.values = responce;
    }, error => {
      console.log(error);
    });
  }

}
