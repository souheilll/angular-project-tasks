import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { NewTask, Task } from './models/task.interface';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
tasks:Task[]=dummyTasks
isAddingTask:boolean=false
@Input({required:true}) name!:string
@Input({required:true}) userId!:string

  constructor(private tasksService:TasksService) { }


get SelectedUserTasks(){
 return  this.tasksService.getUserTasks(this.userId)
}

onAdd(){
this.isAddingTask=true
}

onCancelAddTask(){
  this.isAddingTask=false
}

}
