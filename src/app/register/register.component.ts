import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from  'app/http.service';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('register` component loaded asynchronously');

@Component({
  selector: 'register',
  styles: [`
  `],
  template: `
    <!--EDIT PAGE-->
    <div class="container">
    <h3>Zarejestruj się</h3>
  <form>
    <div class="form-group row">
      <label for="login" class="col-sm-2 col-form-label">Login</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" name="login" id="login" placeholder="Podaj swój login">
      </div>
    </div>
    <div class="form-group row">
      <label for="password" class="col-sm-2 col-form-label" >Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" name="password" id="login" placeholder="Podaj hasło">
      </div>
    </div>
      <div class="form-group row">
      <label for="keeplogin" class="col-sm-2 col-form-label">Zapamiętaj</label>
      <div class="col-sm-1">
      <input type="checkbox" class="form-control keep" id="keeplogin" placeholder="keep">
</div>
</div>
    
    <div class="form-group row">
      <div class="offset-sm-2 col-sm-1 ">
        <button type="button" class="btn btn-primary ">Login</button>
      </div>
      <div class=" col-sm-1 ">
        <button type="button" class="btn btn-primary ">Załóż konto</button>
      </div>
    </div>
  </form>
</div>
    
    
    
  `,
  providers: [HttpService]
})
export class RegisterComponent {
  localState: any;
  constructor(public route: ActivatedRoute, private _http : HttpService) {

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
