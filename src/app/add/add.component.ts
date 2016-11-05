import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`add` component loaded asynchronously');

@Component({
  selector: 'add',
  styles: [`
  `],
  template: `
    <!--EDIT PAGE-->
    <div class="container">
    <h3>Dodaj przejazd</h3>
  <form>
    <div class="form-group row">
      <label for="fromWhere" class="col-sm-2 col-form-label">Skąd</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="fromWhere" placeholder="Podaj skąd chcesz jechać">
      </div>
    </div>
    <div class="form-group row">
      <label for="whereTo" class="col-sm-2 col-form-label">Dokąd</label>
      <div class="col-sm-10">
        <div class="btn-group">
  <button type="button" id="whereTo" class="btn dropdown-toggle form-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Wybierz biuro
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="">EUVIC Gliwice</a>
    <a class="dropdown-item" href="">EUVIC Rybnik</a>
    <a class="dropdown-item" href="">EUVIC Hawaje</a>
  </div>
</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="whenDate" class="col-sm-2 col-form-label">Data</label>
      <div class="col-sm-10">
        <input class="form-control" id="whenDate" type="date" placeholder="Wybierz datę wyjazdu">
      </div>
    </div>
    <div class="form-group row">
      <label for="whenTime" class="col-sm-2 col-form-label">Godzina</label>
      <div class="col-sm-10">
        <input type="time" value="07:30" step="1800" class="form-control" id="whenTime" placeholder="Podaj godzinę dojazdu do biura">
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-sm-2 col-sm-10">
        <button type="submit" class="btn btn-primary">Dodaj</button>
      </div>
    </div>
  </form>
</div>
    
    
    
  `
})
export class AddComponent {
  localState: any;
  constructor(public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `About` component');
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
