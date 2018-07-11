import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-grocery-list',
  templateUrl: './my-grocery-list.component.html',
  styleUrls: ['./my-grocery-list.component.css']
})


export class MyGroceryListComponent implements OnInit {

  task: string;
  tasks = [];

  onClick(){
    this.tasks.push({name: this.task});
  this.task = '';
}

  constructor() { }

  ngOnInit() {
  }

}
