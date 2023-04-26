import { Component } from '@angular/core';
import { MatFabButton } from '@angular/material/button';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  buttomActive: MatFabButton | undefined;

  activatedButton(button: MatFabButton): void {
    button.color = 'primary';

    if(this.buttomActive && this.buttomActive !== button){
      this.buttomActive.color = 'accent';
    }

    this.buttomActive = button;
  }
}
