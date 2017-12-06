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

// action types
export type PizzasAction = LoadPizzas | LoadPizzasFailure | LoadPizzasSuccess;
