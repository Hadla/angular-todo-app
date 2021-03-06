import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/Modules/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

  ngOnInit(): void {
  }
  // Set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }
 
  onToggle(todo) {
    todo.completed= !todo.completed;
    console.log('toggle');
    
  }
  onDelete(todo) {
    console.log('delete');
    
  }
}
