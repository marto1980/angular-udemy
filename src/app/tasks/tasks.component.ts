import { Component, Input } from '@angular/core'

import { dummyTasks } from './dummy-tasks'
import { NewTaskComponent } from './new-task/new-task.component'
import { TaskComponent } from './task/task.component'

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name: string | undefined
  tasks = dummyTasks
  showNewTask = false
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
  onAddTask() {
    this.showNewTask = true
  }
}
