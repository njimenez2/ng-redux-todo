import {createReducer, on} from '@ngrx/store';
import {borrar, crear, editar, limpiarCompletados, toggle, toggleAll} from './todo.actions';
import {Todo} from './models/todo';


export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Estudiar Redux'),
  new Todo('Estudiar Reactive Form')
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(toggle, (state, {id}) => {

    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),
  on(toggleAll, (state, {completado}) => {

    return state.map(todo => {
      return {
        ...todo,
        completado: completado
      };
    });
  }),
  on(editar, (state, {id, texto}) => {

    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrar, (state, {id}) => {
    return state.filter(todo => {
      return todo.id !== id;
    });
  }),
  on(limpiarCompletados, (state) => {
    return state.filter(todo => {
      return !todo.completado;
    });
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
