import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {setFiltro} from '../../filtro/filtro.actions';
import {limpiarCompletados} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: string;
  filtros: string [] = ['completados', 'pendientes', 'todos'];
  countPendientes = 0;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.subscribe(state => {
       this.filtroActual = state.filtro;
       this.countPendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }


  cambiarFiltro(filtro: string) {
    this.store.dispatch(setFiltro({filtro}));
  }

  limpiarCompletados() {
    this.store.dispatch(limpiarCompletados());
  }
}
