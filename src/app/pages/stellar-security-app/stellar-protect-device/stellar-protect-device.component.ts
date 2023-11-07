import { Component } from '@angular/core';

@Component({
  selector: 'app-stellar-protect-device',
  templateUrl: './stellar-protect-device.component.html',
  styleUrls: ['./stellar-protect-device.component.css']
})
export class StellarProtectDeviceComponent {
  constructor(){

  }
  public showVideo = false;

  public showVideoClick() {
    this.showVideo = !this.showVideo;
  }
}
