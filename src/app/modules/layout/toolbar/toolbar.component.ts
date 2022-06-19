import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [DataShareService]
})
export class ToolbarComponent implements OnInit {
  constructor(
    public _share: DataShareService,
  ) {}

  ngOnInit(): void {}

  changeView(event) {
    if(event == 'false'){
      this._share.shareView(false);
    }else{
      this._share.shareView(true);
    }
  }
}
