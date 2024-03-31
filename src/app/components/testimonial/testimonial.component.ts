import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 32,
    center: true,
    autoWidth: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<img src="/assets/images/tabler-icon-chevron-left.svg"  alt="" >',
      '<img src="/assets/images/tabler-icon-chevron-right.svg"  alt="" >',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      1100: {
        items: 4,
      },
    },
    nav: true,
  };
}
