import * as fromWidget from '../actions/widgets.action';
import { WidgetModel } from '../../models/widget.model';
import { AppStateModel } from '../../models/app-state.model';

export const initialState: WidgetModel[] = [
  {
    detail: 'Nieprawidlowy lub w trakcie proby odtworzenia',
    stickers: [
      // {
      //   id: 1,
      //   detail: 'Column "Action Time" in the "By time entries" report',
      //   date: '23 april',
      // },
      // {
      //   id: 2,
      //   detail: 'Column "Action Time" in the "By time entries" report',
      //   date: '23 april',
      // },
      // {
      //   id: 3,
      //   detail: 'Column "Action Time" in the "By time entries" report',
      //   date: '23 april',
      // }
    ],
    id: 1,
  },
];

export function widgetReducer(
  state: WidgetModel[] = initialState,
  action: fromWidget.WidgetsActions
): WidgetModel[] {
  switch (action.type) {
    case fromWidget.CREATE_WIDGET: {
      return [
        ...state,
        action.payload,
      ];
    }
    case fromWidget.REMOVE_WIDGET: {
      return state.filter((widget) => widget.id !== action.payload);
    }
    case fromWidget.UPDATE_WIDGET: {
      const [sticker, widgetId] = action.payload;
      return state.map((widget) => widget.id === widgetId ?
        {...widget, stickers: [...widget.stickers, sticker]} : widget);
    }
  }

  return state;
}

export const $widgetState = (state: AppStateModel) => state.widgets;
