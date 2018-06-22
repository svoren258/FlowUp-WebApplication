import { StickerModel } from './sticker.model';

export interface WidgetModel {
  id: number;
  detail: string;
  stickers: StickerModel[];
}
