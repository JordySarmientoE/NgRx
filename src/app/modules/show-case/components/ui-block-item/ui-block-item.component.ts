
import { Component, Input, OnInit } from '@angular/core';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectListItem } from 'src/app/state/selectors/items.selector';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css']
})
export class UiBlockItemComponent implements OnInit {

  items$ : Observable<any> = new Observable()

  constructor(private store: Store<AppState>) {
    this.items$ = this.store.select(selectListItem)
  }

  ngOnInit(): void {
    /* this.showCase.getDataApi()
      .subscribe((res) => {
        this.listData = res
      }) */
  }


}
