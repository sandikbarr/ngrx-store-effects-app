import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';
import { CreatePizzaFailure } from 'src/products/store';

@Injectable()
export class PizzasEffects {
  constructor(private actions$: Actions, private pizzaService: fromServices.PizzasService) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService
        .getPizzas()
        .pipe(
          map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
          catchError(error => of(new pizzaActions.LoadPizzasFailure(error)))
        );
    })
  );

  @Effect()
  createPizza$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA).pipe(
    map((action: pizzaActions.CreatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzaService
        .createPizza(pizza)
        .pipe(
          map(pizza => new pizzaActions.CreatePizzaSuccess(pizza)),
          catchError(error => of(new pizzaActions.CreatePizzaFailure(error)))
        );
    })
  );

  @Effect()
  updatePizza$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA).pipe(
    map((action: pizzaActions.UpdatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzaService
        .updatePizza(pizza)
        .pipe(
          map(pizza => new pizzaActions.UpdatePizzaSuccess(pizza)),
          catchError(error => of(new pizzaActions.UpdatePizzaFailure(error)))
        );
    })
  );

  @Effect()
  removePizza$ = this.actions$.ofType(pizzaActions.REMOVE_PIZZA).pipe(
    map((action: pizzaActions.RemovePizza) => action.payload),
    switchMap(pizza => {
      const removedPizza = { ...pizza };
      return this.pizzaService.removePizza(pizza).pipe(
        map(pizza => {
          // TODO: pizza is now empty object, so I've shallow copied it to deletedPizza
          return new pizzaActions.RemovePizzaSuccess(removedPizza);
        }),
        catchError(error => of(new pizzaActions.RemovePizzaFailure(error)))
      );
    })
  );
}
