import { Component, OnInit } from '@angular/core';
import { ApicallService } from './apicall.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public service: ApicallService) {

  }

  ngOnInit() {
    this.loadList()
  }

  loadList() {
    this.service.getCall('list').subscribe((result) => {
      console.log('loadList Response-----', result);
    });
  }


  addList() {
    let body = {};
    body = {
      "fname": 'Sagar',
      "lname": "Chaudhari",
    };

    this.service.postCall("addList", body).subscribe((result) => {
      console.log('addList Response-----', result);
    });
  }

}
