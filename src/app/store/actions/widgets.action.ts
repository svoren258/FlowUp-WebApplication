import { Action } from '@ngrx/store';
import { WidgetModel } from '../../models/widget.model';
import { StickerModel } from '../../models/sticker.model';

export const CREATE_WIDGET = '[Widgets] Create Widgets';
export const REMOVE_WIDGET = '[Widgets] Remove Widgets';
export const UPDATE_WIDGET = '[Widgets] Update Widgets';

export class CreateWidgetAction implements Action {
  readonly type = CREATE_WIDGET;

  constructor(public readonly payload: WidgetModel) { }
}

export class RemoveWidgetAction implements Action {
  readonly type = REMOVE_WIDGET;

  constructor(public readonly payload: number) { }
}

export class UpdateWidgetAction implements Action {
  readonly type = UPDATE_WIDGET;

  constructor(public readonly payload: [StickerModel, number]) { }
}


export type WidgetsActions = CreateWidgetAction | RemoveWidgetAction | UpdateWidgetAction;
