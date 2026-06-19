import { Injectable } from '@angular/core';
import { Task,NewTask } from './models/task.interface';
import { dummyTasks } from './dummy-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
private tasks:Task[]=dummyTasks


getUserTasks(userId:string){
     return  this.tasks.filter((task)=>task.userId===userId)
  }

deleteTask(taskId :string){
this.tasks=this.tasks.filter((task)=>task.id!==taskId)
}

addTask(data:NewTask,userId:string){
this.tasks.unshift({
  id:new Date().getTime().toString(),
  userId:userId,
  title:data.title,
  summary:data.summary,
  dueDate:data.dueDate
})
}

}
