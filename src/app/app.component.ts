import { Component } from '@angular/core';
import {Route} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'receiptApp-angular';

  constructor() {
  }

  onNavigate(screen:{buttonType:string}){
  }
}
