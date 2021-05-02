import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as Actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  completado: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  marcarTodos() {
    this.completado = !this.completado;
    console.log(this.completado);
    this.store.dispatch(Actions.toggleAll({completado: this.completado}));
  }
}
