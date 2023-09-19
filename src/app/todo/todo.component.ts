import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todoText = '';
  todos: string[] = [];
  error = '';

  addTodo() {
    const trimmedText = this.todoText.trim();
    if (trimmedText.length >= 4 && trimmedText.length <= 200 && !/[!@#$%^&*(),.?":{}|<>]/.test(trimmedText)) {
      this.todos.push(trimmedText);
      this.todoText = '';
      this.error = '';
    } else {
      this.error = 'Invalid input:(    Please the limit allowed to enter is between 4 to 400 characters.';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }


}
