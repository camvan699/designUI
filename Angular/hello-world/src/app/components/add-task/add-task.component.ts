import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter()
 text:String;
 day:String;
 reminder:boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert("Add task plz")
      return;
    }
    const newTask = { 
      text: this.text,
      day:this.day,
      reminder:this.reminder
    }
    this.onAddTask.emit(newTask);
    //todo emit event

    this.text='';
    this.day='';
    this.reminder=false;
  }

}
