import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpService } from  'app/http.service';
import { registerModel } from 'app/userInfo';
import {LockerModule, Locker, LockerConfig} from 'angular2-locker'


/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('login` component loaded asynchronously');

@Component({
  selector: 'login',
  styles: [`
  `],
  template: `
    <!--EDIT PAGE-->
    <div class="container">
    <h3>Login</h3>
  <form>
    <div class="form-group row">
      <label for="login" class="col-sm-2 col-form-label">Login</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" [(ngModel)]="model.userName" name="login" placeholder="Podaj swój login">
      </div>
    </div>
    <div class="form-group row">
      <label for="password" class="col-sm-2 col-form-label"  >Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" [(ngModel)]="model.password" name="password" id="password" placeholder="Podaj hasło">
      </div>
    </div>
      <div class="form-group row">
      <label for="keeplogin" class="col-sm-2 col-form-label">Zapamiętaj</label>
      <div class="col-sm-1">
      <input type="checkbox" class="form-control keep" id="keeplogin" placeholder="keep" >
</div>
</div>
    
    <div class="form-group row">
      <div class="offset-xs-2 col-xs-2 ">
        <button type="button" class="btn btn-primary " (click)="getLogin()">Login</button>
      </div>
      <div class=" col-xs-8 ">
        <button type="button" style="float: right" class="btn btn-primary" (click)="registerAccountPage()">Załóż konto</button>
      </div>
    </div>
  </form>
</div>
    
    
    
  `,
  providers: [HttpService, registerModel]
})
export class LoginComponent {
  localState: any;
  constructor(public route: ActivatedRoute, private _http : HttpService, private _router : Router, public userInfo : registerModel, public storage : Locker) {

  }

  registerAccountPage(){
    this._router.navigate(['/register']);
  }

  model : loginModel = new loginModel();


   getLogin() {
     this._http.post("http://carshare2016.azurewebsites.net/api/user/login",this.model).then(function (response) {
       //this._router.navigate(['/home'])
       var name = response.firstName;
       console.log(name);
       this.storage.set('firstName',name);
     }
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

export class loginModel {
  userName : string;
  password : string;
}
