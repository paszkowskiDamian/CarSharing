import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
        <input type="text" class="form-control" required [(ngModel)]="model.userName" name="login" id="login" placeholder="Podaj swój login">
      </div>
    </div>
    
    <div class="form-group row">
      <label for="firstName" class="col-sm-2 col-form-label" >Imię</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required [(ngModel)]="model.firstName" name="firstName" id="firstName" placeholder="Podaj swoje imię">
      </div>
    </div>
    
    <div class="form-group row">
      <label for="lastName" class="col-sm-2 col-form-label" >Nazwisko</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required [(ngModel)]="model.lastName" name="lastName" id="lastName" placeholder="Podaj swoje nazwisko">
      </div>
    </div>
    
    <div class="form-group row">
      <label for="email" class="col-sm-2 col-form-label" >Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" required [(ngModel)]="model.email" name="email" id="email" placeholder="Podaj swój emial">
      </div>
    </div>
    
    <div class="form-group row">
      <label for="phoneNumber" class="col-sm-2 col-form-label" >Numer Telefonu</label>
      <div class="col-sm-10">
        <input type="tel" class="form-control" required [(ngModel)]="model.phoneNumber" name="phoneNumber" id="phoneNumber" placeholder="Podaj swój numer telefonu">
      </div>
    </div>
    
    <div class="form-group row">
      <label for="selfie" class="col-sm-2 col-form-label" >Selfie URL</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" [(ngModel)]="model.selfie" name="selfie" id="selfie" placeholder="Podaj swój numer telefonu">
      </div>
    </div>
    
    <div class="form-group row">
      <label for="password" class="col-sm-2 col-form-label" >Hasło</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" required [(ngModel)]="model.password" name="password" id="password" placeholder="Podaj hasło">
      </div>
    </div>
    
    <div class="form-group row">
      <label for="passwordVeryfication" class="col-sm-2 col-form-label" >Powtórz hasło</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" required [(ngModel)]="model.passwordCheck" name="passwordVeryfication" id="passwordVeryfication" placeholder="Zweryfikuj swoje hasło">
      </div>
    </div>
    
    <div class="form-group row">
      <div class="offset-xs-2 col-xs-2 ">
        <button type="button" class="btn btn-primary " (click)="registerUser()">Załóż konto</button>
      </div>
      <div class=" col-xs-8 ">
        <button type="button" style="float: right" class="btn btn-primary " (click)="loginUserPage()">Login</button>
      </div>
    </div>
  </form>
</div>
    
    
    
  `,
  providers: [HttpService]
})
export class RegisterComponent {
  localState: any;
  constructor(public route: ActivatedRoute, private _http : HttpService, private _router : Router){
  }

  model : registerModel = new registerModel();

  loginUserPage() {
    this._router.navigate([('/login')]);
  }

  registerUser() {
    if(this.model.selfie.length == 0)
    {
      this.model.selfie = 'http://www.catsinsinks.com/cats/rotator.php';
    }
    if(this.model.password != this.model.passwordCheck)
    {
      
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

export class registerModel {
  userName : string;
  firstName : string;
  lastName : string;
  password : string;
  passwordCheck: string;
  email: string;
  phoneNumber: string;
  selfie: string;
}
