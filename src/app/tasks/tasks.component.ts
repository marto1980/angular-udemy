import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  @Input() name: string | undefined
}
