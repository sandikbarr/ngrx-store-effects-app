import { Action } from '@ngrx/store';

import { Topping } from '../../models/topping.model';

export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAILURE = '[Products] Load Toppings Failure';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFailure implements Action {
  readonly type = LOAD_TOPPINGS_FAILURE;
  constructor(public payload: any) {}
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: Topping[]) {}
}

// action types
export type ToppingsAction = LoadToppings | LoadToppingsFailure | LoadToppingsSuccess;
