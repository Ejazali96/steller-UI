import { Component, Renderer2, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  buttonType:string = ''
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
    // this.loadScript('../../../assets/js/main.js');
    this.loadScript('../../../assets/js/jquery-3.4.1.min.js');
    this.loadScript('../../../assets/js/plugins.js');
    this.loadScript('../../../assets/js/magnific.popup.min.js');
    this.loadScript('',`
    $('.play_video').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      iframe: {
          patterns: {
              youtube: {
                  index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                  id: 'v=', // String that splits URL in a two parts, second part should be %id%
                  // Or null - full URL will be returned
                  // Or a function that should return %id%, for example:
                  // id: function(url) { return 'parsed id'; }

                  src: 'https://www.youtube.com/embed/Y4UwssndcPA' // URL that will be set as a source for iframe.
              },

              // you may add here more sources

          },

          srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      }
  });`)

  }

  loadScript(url:any,html:any='') {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = html;
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }


  ngAfterViewInit() {
    // Load the external JavaScript file
    const script = this.renderer.createElement('script');
    script.src = "../../../assets/js/main.js";

    // Set the onload callback to call your function
    script.onload = () => {
      // Assuming your function is called myExternalFunction

    };

    this.renderer.appendChild(this.el.nativeElement, script);
  }
}
