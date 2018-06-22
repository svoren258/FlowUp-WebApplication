import { Component, Input } from '@angular/core';
import { WidgetModel } from '../../../models/widget.model';
import { AppStateModel } from '../../../models/app-state.model';
import { Store } from '@ngrx/store';
import { RemoveWidgetAction } from '../../../store/actions';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent  {

  @Input() layout: 'vertical' | 'horizontal';
  @Input() column: boolean;
  @Input() widget: WidgetModel;

  newStickerFormShown = false;

  constructor(private store: Store<AppStateModel>) {}

  removeWidget(): void {
    this.store.dispatch(new RemoveWidgetAction(this.widget.id));
  }

  showNewStickerForm(show: boolean = true): void {
    this.newStickerFormShown = show;
  }
}
