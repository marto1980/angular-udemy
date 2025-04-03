import { Component } from '@angular/core'

import { DUMMY_USERS } from '../dummy-users'

// eslint-disable-next-line sonarjs/pseudo-random
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // eslint-disable-next-line security/detect-object-injection
  selectedUser = DUMMY_USERS[randomIndex]

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar
  }
  onSelectUser() {
    // eslint-disable-next-line sonarjs/pseudo-random
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // eslint-disable-next-line security/detect-object-injection
    this.selectedUser = DUMMY_USERS[randomIndex]
  }
}
