import { Component } from '@angular/core';
import {CheckedoutService} from "../../services/checkedout.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent {

  public order: any = null;

  public order_id = "";

  constructor(private checkoutService:CheckedoutService,  private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.order_id = params['order_id'];
      this.thankyou();
    });

  }

  thankyou(){
    this.checkoutService.thankyou(this.order_id).subscribe({
      next:e => {

        if(e.response_code !== 200) {
          alert('Could not find order.. something went wrong?')
        } else {
          this.order = e;
        }
        console.log(e);

      },
      error:e => console.log(e)
    })

  }


}
