import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



import { AgmCoreModule } from 'angular2-google-maps/core';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`TopDriver` component loaded asynchronously');

@Component({
  selector: 'top-driver',
  styleUrls: [ 'top-driver.component.css' ],
  
  templateUrl: './top-driver.component.html'
  
})
export class TopDriverComponent {
  localState: any;

  driverName = "Jan Peszek"
  srcAddress = "Katowice al. Korfantego 2"
  position = "1";
  routes = "33";
  passengers = "47";
  distance = "120";
  constructor(public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `TopDriver` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then(json => {
          console.log('async mockData', json);
          this.localState = json;
        });

    });
  }

}
