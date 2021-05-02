import {createAction, props} from '@ngrx/store';

export const crear = createAction(
  '[Todo] Crea todo',
  props<{ texto: string }>());


export const toggle = createAction(
  '[Todo] Toggle todo',
  props<{ id: number }>());

export const toggleAll = createAction(
  '[Todo] toggleAll todo',
  props<{ completado: boolean }>());

export const editar = createAction(
  '[Todo] Editar todo',
  props<{ id: number, texto: string }>());

export const borrar = createAction(
  '[Todo] Borrar todo',
  props<{ id: number}>());


export const limpiarCompletados = createAction(
  '[Todo] LimpiarCompletados'
);
