import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import * as fromStore from '../../store';
import { getSelectedPizza, getAllToppings, getPizzaVisualised } from '../../store';

import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  template: `
    <div 
      class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="visualise$ | async">
        </pizza-display>
      </pizza-form>
    </div>
  `
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.pizza$ = this.store.select(getSelectedPizza).pipe(
      tap((pizza: Pizza) => {
        const pizzaExists = !!(pizza && pizza.toppings);
        const toppings = pizzaExists ? pizza.toppings.map(toppings => toppings.id) : [];
        this.store.dispatch(new fromStore.VisualiseToppings(toppings));
      })
    );
    this.toppings$ = this.store.select(getAllToppings);
    this.visualise$ = this.store.select(getPizzaVisualised);
  }

  onSelect(event: number[]) {
    this.store.dispatch(new fromStore.VisualiseToppings(event));
  }

  onCreate(event: Pizza) {}

  onUpdate(event: Pizza) {}

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
    }
  }
}
