import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'edit',
  styles: [`
  `],
  template: `
    <!--EDIT PAGE-->
    <div class="container">
    <h3>Edycja profilu</h3>
  <form>
    <div class="form-group row">
      <label for="numerTelefonu" class="col-sm-2 col-form-label">Numer telefonu</label>
      <div class="col-sm-10">
        <input type="number" class="form-control" id="numerTelefonu" placeholder="Podaj swój numer telefonu">
      </div>
    </div>
    <div class="form-group row">
      <label for="email" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="email" placeholder="Podaj swój adres email">
      </div>
    </div>
    <div class="form-group row">
      <label for="imgURL" class="col-sm-2 col-form-label">Selfie URL</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="imgURL" placeholder="Podaj link do twojego selfie">
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-sm-2 col-sm-10">
        <button type="submit" class="btn btn-primary">Wyślij</button>
      </div>
    </div>
  </form>
</div>
    
    
    
  `
})
export class EditComponent {
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
