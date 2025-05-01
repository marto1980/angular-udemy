import { Injectable } from '@angular/core'

import { dummyTasks } from './dummy-tasks'
import { type NewTaskData } from './task/task.model'

@Injectable({ providedIn: 'root' })
class TasksService {
  private tasks = dummyTasks
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId)
  }
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks = [
      {
        id: Date.now().toString(),
        userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
      },
      ...this.tasks,
    ]
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
}
export { TasksService }
