import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateWidgetAction } from '../../store/actions';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../models/app-state.model';
import { formLabelLenValidator } from '../../validators/form.validator';

@Component({
  selector: 'app-widgetform',
  templateUrl: './widgetform.component.html',
  styleUrls: ['./widgetform.component.css']
})
export class WidgetformComponent implements OnInit {

  widgetForm: FormGroup;
  @Output() showForm = new EventEmitter<void>();

  constructor(private readonly store: Store<AppStateModel>) {
  }

  ngOnInit() {
    this.widgetForm = new FormGroup({
      'widgetLabel' : new FormControl(
        null,
        [Validators.required, formLabelLenValidator(8, 32)],
      ),
    });
  }

  onSubmit(): void {
    console.log('onSubmit');
    this.store.dispatch(new CreateWidgetAction({
      id: Math.floor((Math.random() * 1000) + 1),
      detail: this.widgetForm.get('widgetLabel').value,
      stickers: [],
    }));
    this.showForm.emit();
    this.widgetForm.reset();
  }
}


