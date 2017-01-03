import { Component, OnInit } from '@angular/core';
import { SportsapiApi } from '../../assets/trubet-sports-ng2-client/api/api';
import { Sport } from '../../assets/trubet-sports-ng2-client/model/Sport';
import * as models from '../../assets/trubet-sports-ng2-client/model/models';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sports: Sport[];

  constructor(private sportApi: SportsapiApi) { }

  ngOnInit() {

    this.sportApi.salesVmaxWebDataSportsGetUsingGET()
      .do(console.log)
      .subscribe(data => this.sports = data.Sports);

  }

}
