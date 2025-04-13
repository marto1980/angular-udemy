import { Component } from '@angular/core'

import { DUMMY_USERS } from './dummy-users'
import { HeaderComponent } from './header/header.component'
import { UserDataComponent } from './user-data/user-data.component'
import { UserComponent } from './user/user.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, UserDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUserId: string | undefined
  onSelectUser(id: string) {
    this.selectedUserId = id
    console.log('Selected user with id:' + id)
  }
}
