import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stellar-protect-device',
  templateUrl: './stellar-protect-device.component.html',
  styleUrls: ['./stellar-protect-device.component.css']
})
export class StellarProtectDeviceComponent {
  @ViewChild('myVideo') myVideo: ElementRef
  constructor(){

  }
 isPause:boolean = false
  playVideo(){
    if(!this.isPause){
      this.myVideo?.nativeElement.play();
    }
    else{
      this.myVideo?.nativeElement.pause();
    }
    this.isPause = !this.isPause
  }
}
