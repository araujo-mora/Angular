import { Component } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(
    public _share: DataShareService,
  ) {}

  changeView(event) {
    if(event == 'false'){
      this._share.shareView(false);
    }else{
      this._share.shareView(true);
    }
  }
}
