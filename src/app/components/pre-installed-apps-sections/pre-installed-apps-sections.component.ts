import { Component } from '@angular/core';

@Component({
  selector: 'app-pre-installed-apps-sections',
  templateUrl: './pre-installed-apps-sections.component.html',
  styleUrls: ['./pre-installed-apps-sections.component.css']
})
export class PreInstalledAppsSectionsComponent {
  data:any[]=[
    {
      appName:'Aptoide',
      logo:'../../../assets/img/install_appicon.svg'
    }
  ]
}
