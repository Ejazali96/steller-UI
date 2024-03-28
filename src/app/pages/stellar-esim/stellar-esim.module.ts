import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "./../../shared/shared.module";
import { StellarEsimComponent } from "./stellar-esim.component";
import { StellarESimRoutingModule } from "./stellar-esim-routing.module";
import { ESimBenifitsComponent } from "./e-sim-benifits/e-sim-benifits.component";
import { ESimPlanComponent } from "./e-sim-plan/e-sim-plan.component";
import { BecomeSellerComponent } from "./become-seller/become-seller.component";
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    StellarEsimComponent,
    ESimBenifitsComponent,
    ESimPlanComponent,
    BecomeSellerComponent,
  ],
  imports: [CommonModule, StellarESimRoutingModule, SharedModule, CarouselModule],
})
export class StellarESimModule {}
