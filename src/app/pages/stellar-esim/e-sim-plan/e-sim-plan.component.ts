import { Component } from '@angular/core';

@Component({
  selector: 'app-e-sim-plan',
  templateUrl: './e-sim-plan.component.html',
  styleUrls: ['./e-sim-plan.component.css']
})
export class ESimPlanComponent {
  activeTab:number = 1;
  translaValue:number = 0;

  changePlanType(index:number){
    this.activeTab = index;
    this.translaValue = this.activeTab===1?0:100
  }
}
