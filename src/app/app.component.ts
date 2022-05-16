import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'receiptApp-angular';
  currentScreen:string = 'recipe';

  onNavigate(screen:{buttonType:string}){
    this.currentScreen = screen.buttonType;
  }
}
