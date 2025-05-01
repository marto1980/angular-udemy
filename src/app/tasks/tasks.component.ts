import { Component, Inject, Input } from '@angular/core'

import { NewTaskComponent } from './new-task/new-task.component'
import { TaskComponent } from './task/task.component'
import { TasksService } from './tasks.service'

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name: string | undefined
  isAddingTask = false
  constructor(
    @Inject(TasksService) private readonly tasksService: Readonly<TasksService>,
  ) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onStartAddTask() {
    this.isAddingTask = true
  }
  onCloseAddTask() {
    this.isAddingTask = false
  }
}
