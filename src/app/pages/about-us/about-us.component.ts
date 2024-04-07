import { Component } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  usersSaved: number = 0;
  purchases: number = 0;
  screensProtected: number = 0;
  public addingToCart = false;

  ngOnInit() {
    this.startCounters();
  }
  // For Counter///
  startCounters() {
    const usersSavedLimit = 1300;
    const purchasesLimit = 15;
    const screensProtectedLimit = 500;

    const usersSavedInterval = setInterval(() => {
      this.usersSaved++;
      if (this.usersSaved >= usersSavedLimit) {
        clearInterval(usersSavedInterval);
      }
    }, 5);

    const purchasesInterval = setInterval(() => {
      this.purchases++;
      if (this.purchases >= purchasesLimit) {
        clearInterval(purchasesInterval);
      }
    }, 100);

    const screensProtectedInterval = setInterval(() => {
      this.screensProtected++;
      if (this.screensProtected >= screensProtectedLimit) {
        clearInterval(screensProtectedInterval);
      }
    }, 5);
  }
  // Counter end////

  owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 20,
    center: true,
    autoWidth: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 3000,
        autoplayHoverPause: false,
    navText: [
      '',
      '',
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 6,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };
}
