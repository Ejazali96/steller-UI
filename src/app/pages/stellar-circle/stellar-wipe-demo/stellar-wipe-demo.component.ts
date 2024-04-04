import { Component } from '@angular/core';

@Component({
  selector: 'app-stellar-wipe-demo',
  templateUrl: './stellar-wipe-demo.component.html',
  styleUrls: ['./stellar-wipe-demo.component.css']
})
export class StellarWipeDemoComponent {

  activeSection: number = 1;

  moveToSection(data:any){
    this.activeSection= data;
    if(this.activeSection === 4){
      setTimeout(() => {
        this.activeSection = 5;
        setTimeout(() => {
          this.activeSection = 6;
        }, 1500);
      }, 1500);
    }
  }
}
