import { Component, Renderer2, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isProductMenuOpen:boolean = false
  buttonType:string = ''
  constructor(private activerouter:Router) {
    console.log(this.activerouter.url);
    if(this.activerouter.url.includes('stellar-phone') || this.activerouter.url.includes('checkout'))
    {
      this.buttonType = 'buy'
    }else
    if(this.activerouter.url.includes('activate-phone'))
    {
      this.buttonType = 'privacy'
    }
  }


  ngOnInit() {


  }

  ngAfterViewInit() {
   
  }
}
