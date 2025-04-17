import { NgFor, NgIf } from '@angular/common'
import { Component } from '@angular/core'

import { DUMMY_USERS } from './dummy-users'
import { HeaderComponent } from './header/header.component'
import { TasksComponent } from './tasks/tasks.component'
import { UserComponent } from './user/user.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUserId?: string
  get selectedUser() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId)
  }
  onSelectUser(id: string) {
    this.selectedUserId = id
    console.log('Selected user with id:' + id)
  }
}
