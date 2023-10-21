import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pre-installed-app-card',
  templateUrl: './pre-installed-app-card.component.html',
  styleUrls: ['./pre-installed-app-card.component.css']
})
export class PreInstalledAppCardComponent {
  @Input() appName:string = '';
  @Input() logo:string = '';



}
