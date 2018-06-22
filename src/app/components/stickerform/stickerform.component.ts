import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../models/app-state.model';
import { UpdateWidgetAction } from '../../store/actions';
import { formLabelLenValidator } from '../../validators/form.validator';

@Component({
  selector: 'app-stickerform',
  templateUrl: './stickerform.component.html',
  styleUrls: ['./stickerform.component.css']
})
export class StickerformComponent implements OnInit {

  stickerForm: FormGroup;
  @Output() showForm = new EventEmitter<void>();
  @Input() widgetId: number;

  constructor(private store: Store<AppStateModel>) {
  }

  ngOnInit() {
    this.stickerForm = new FormGroup({
      'stickerLabel' : new FormControl(null,
         [Validators.required, formLabelLenValidator(8, 32)]),
      'date' : new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    console.log(this.widgetId);
    this.store.dispatch(new UpdateWidgetAction([
      {
        id: Math.floor((Math.random() * 10) + 1),
        detail: this.stickerForm.get('stickerLabel').value,
        date: this.stickerForm.get('date').value,
      },
      this.widgetId
    ]));
    this.showForm.emit();
    this.stickerForm.reset();
  }
}


