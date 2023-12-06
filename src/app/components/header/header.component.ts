import { Component, Renderer2, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  buttonType:string = ''
  isProductMenuOpen:boolean = false
  constructor(private renderer: Renderer2, private el: ElementRef ,private activerouter:Router) {
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

  loadScript(url:any,html:any='') {
    // const body = <HTMLDivElement> document.body;
    // const script = document.createElement('script');
    // script.innerHTML = html;
    // script.src = url;
    // script.async = false;
    // script.defer = true;
    // body.appendChild(script);
  }


  ngAfterViewInit() {
   
  }
}
