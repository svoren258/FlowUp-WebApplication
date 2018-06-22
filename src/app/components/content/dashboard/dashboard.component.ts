import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { WidgetModel } from '../../../models/widget.model';
import { Observable } from 'rxjs';
import { AppStateModel } from '../../../models/app-state.model';
import { $widgetState, $widgetStateEmpty } from '../../../store/reducers/widgets.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  column = true;

  readonly widgets$: Observable<WidgetModel[]>;
  readonly widgetsEmpty$: Observable<boolean>;

  constructor(private readonly store: Store<AppStateModel>) {
    this.widgets$ = this.store.select($widgetState);
    this.widgetsEmpty$ = this.store.select($widgetStateEmpty);
  }

  switchLayout(toColumn: boolean): void {
    this.column = toColumn;
  }
}
