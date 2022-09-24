import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todoItem :string='';
  todoList :string[]=[];
  addToTodoList=()=>{
    this.todoList.push(this.todoItem)
    this.todoItem=''
  }
}
