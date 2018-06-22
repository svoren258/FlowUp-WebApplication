import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  newWidgetFormShown = false;

  showNewWidgetForm(show: boolean = true): void {
    this.newWidgetFormShown = show;
  }
}
