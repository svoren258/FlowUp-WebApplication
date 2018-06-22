import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() shown = false;
  @Output() shownChange = new EventEmitter<boolean>();

  toggleVisibility(): void {
    this.shownChange.emit(!this.shown);
  }
}
