import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../models/todo';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as Actions from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  chkCompletado: FormControl;
  txtInput: FormControl;
  editMode: boolean;
  @ViewChild('textInputFisico') textInputFisico: ElementRef;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(Actions.toggle({id: this.todo.id}));
      console.log('valor');
    });
  }

  editar() {
    this.editMode = true;
    //para que quede el foco al hacer dobleclick
    setTimeout(() => {
      this.textInputFisico.nativeElement.focus();
    }, 1);

  }

  terminarEdicion() {
    this.editMode = false;
    this.store.dispatch(Actions.editar({
      id: this.todo.id,
      texto: this.txtInput.value
    }));
  }

  eliminar() {
    this.store.dispatch(Actions.borrar({
      id: this.todo.id
    }));
  }
}
