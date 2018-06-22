import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WidgetModel } from '../../../models/widget.model';
import { Observable } from 'rxjs';
import { AppStateModel } from '../../../models/app-state.model';
import { $widgetState } from '../../../store/reducers/widgets.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  row = false;
  column = true;

  widgets$: Observable<WidgetModel[]>;
  constructor(private store: Store<AppStateModel>) { }

  ngOnInit() {
    this.widgets$ = this.store.select($widgetState);
  }

  switchLayoutToRow(): void {
    this.column = false;
    this.row = true;
  }

  switchLayoutToColumn(): void {
    this.column = true;
    this.row = false;
  }

  // addWidget(): void {
  //   this.widgets.push(new WidgetComponent());
  // }

}
