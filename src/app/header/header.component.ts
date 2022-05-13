import {Component, EventEmitter, Output} from "@angular/core";

@Component(
  {
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
  }
)
export class HeaderComponent {
  @Output() navigationClick = new EventEmitter<{ buttonType: String }>();

  onSelect(feature:string) {
    this.navigationClick.emit({buttonType: feature})
  }



}
