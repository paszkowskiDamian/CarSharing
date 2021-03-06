/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { NewsComponent } from './news';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav class="container">
      <div class="row">
        <div class="col-sm-6">
          <a [routerLink]="['./home']"><img src="./assets/images/logo-100px.png" id="logo"></a>
        </div>
        <div *ngIf="isLoggedIn === true" class="col-sm-6 userPanel">
          <div id="userImage">
            <div id="badge"><p>+1</p></div>
          </div>
          <div class="userName">
            <h4 id="firstLastName">Jakub Jodłowski</h4>
           
           <small><a [routerLink]="['./login']" >  Wyloguj</a></small>
           <small style="margin-right: 10px"><a [routerLink]="['./edit']" >Edytuj  </a></small>
           
          </div>
         
        </div>
    </div>
      
    </nav>
    
    <main>
      <router-outlet></router-outlet>
    </main>


    <!--<pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>-->

    <!--<footer>-->
      <!--<span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>-->
      <!--<div>-->
        <!--<a [href]="url">-->
          <!--<img [src]="angularclassLogo" width="25%">-->
        <!--</a>-->
      <!--</div>-->
    <!--</footer>-->
  `
})
export class AppComponent {
  angularclassLogo = 'assets/icon/ms-icon-310x310.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  isLoggedIn = true;

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
