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
    a=0;
    b=0;
    c=0;
    add=()=>{
      this.c=this.a+this.b;
    }
    sub=()=>{
      this.c=this.a-this.b;
    }
  }
