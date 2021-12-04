import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { Store } from '@ngrx/store';
import { selectListItem } from 'src/app/state/selectors/items.selector';
import { AppState } from '../../../state/app.state';
import { Observable } from 'rxjs';
import { addItem } from '../../../state/actions/items.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items$ : Observable<any> = new Observable()

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    console.log('Calle 1');

  }

  addItem(): void {
    const dataItem: ItemModel = {
      name: 'pepe',
      price: 1,
      image: 'https://lh3.googleusercontent.com/K2k3h_1hKw1jTx9dpty_1w6_42l_UcfRWMz0cJqKD8pvo1ys7X2NP3D2ubtVYO9lKo8EJpQdSuTiquqA3lLmdvbSNbEXLeSWag-tcw=w361'
    }

    this.store.dispatch(addItem({item: dataItem}))

    this.items$ = this.store.select(selectListItem)
  }

}
