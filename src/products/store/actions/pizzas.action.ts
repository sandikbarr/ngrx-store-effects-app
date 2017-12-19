import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

// load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAILURE = '[Products] Load Pizzas Failure';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFailure implements Action {
  readonly type = LOAD_PIZZAS_FAILURE;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

export const CREATE_PIZZA = '[Products] Create Pizza';
export const CREATE_PIZZA_FAILURE = '[Products] Create Pizza Failure';
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizza Success';

export class CreatePizza implements Action {
  readonly type = CREATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class CreatePizzaFailure implements Action {
  readonly type = CREATE_PIZZA_FAILURE;
  constructor(public payload: any) {}
}

export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export const UPDATE_PIZZA = '[Products] Update Pizza';
export const UPDATE_PIZZA_FAILURE = '[Products] Update Pizza Failure';
export const UPDATE_PIZZA_SUCCESS = '[Products] Update Pizza Success';

export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class UpdatePizzaFailure implements Action {
  readonly type = UPDATE_PIZZA_FAILURE;
  constructor(public payload: any) {}
}

export class UpdatePizzaSucess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

// action types
export type PizzasAction =
  | LoadPizzas
  | LoadPizzasFailure
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaFailure
  | CreatePizzaSuccess
  | UpdatePizza
  | UpdatePizzaFailure
  | UpdatePizzaSucess;
