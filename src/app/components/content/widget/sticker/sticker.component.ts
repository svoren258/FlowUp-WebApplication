import {Component, Input, OnInit} from '@angular/core';
import { StickerModel } from '../../../../models/sticker.model';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {

  @Input() row: boolean;
  @Input() sticker: StickerModel;
  constructor() { }

  ngOnInit() {
  }

}
