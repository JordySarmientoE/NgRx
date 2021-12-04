import { ItemModel } from '../../core/models/Item.interface';

export interface ItemState {
  loading: boolean;
  items: ReadonlyArray<ItemModel>;
}
