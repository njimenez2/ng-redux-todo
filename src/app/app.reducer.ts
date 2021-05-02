import {Todo} from './todos/models/todo';
import {ActionReducerMap} from '@ngrx/store';
import {todoReducer} from './todos/todo.reducer';

import {filtroReducer} from './filtro/filtro.reducer';

export interface AppState {
  todos: Todo[],
  filtro: string
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
};
