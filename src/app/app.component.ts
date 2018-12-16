import { Component } from '@angular/core';
import { OverlayService } from './services/overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cdk-overlay';

  constructor(private overlayService: OverlayService) {}

  public openOverlay(): void {
    const ref = this.overlayService.open({
      data: {
        title: 'Title passed to entry component'
      }
    });

    ref.afterClose().subscribe(data => console.log('after close:', data));
  }
}
