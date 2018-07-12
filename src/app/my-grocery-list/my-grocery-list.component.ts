import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-grocery-list',
  templateUrl: './my-grocery-list.component.html',
  styleUrls: ['./my-grocery-list.component.css']
})


export class MyGroceryListComponent  {

  task: string;
  tasks = [];

  onClick(){
      this.tasks.push({name: this.task, strike: false});
      this.task = '';
  } 
}