import { Component } from '@angular/core';

@Component({
  selector: 'app-embrac-section',
  templateUrl: './embrac-section.component.html',
  styleUrls: ['./embrac-section.component.css']
})
export class EmbracSectionComponent {

  public showVideo = false;

  public showVideoClick() {
    this.showVideo = !this.showVideo;
  }

}
