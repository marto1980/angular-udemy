import { Component, Input } from '@angular/core'

import { dummyTasks } from './dummy-tasks'
import { TaskComponent } from './task/task.component'

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name: string | undefined
  tasks = dummyTasks
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
}
