import { Component, computed, signal } from '@angular/core'

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
  private readonly computeImagePath = () =>
    'assets/users/' + this.selectedUser().avatar
  // eslint-disable-next-line security/detect-object-injection
  selectedUser = signal(DUMMY_USERS[randomIndex])

  imagePath = computed(this.computeImagePath)
  onSelectUser() {
    // eslint-disable-next-line sonarjs/pseudo-random
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    const randomUser = DUMMY_USERS.at(randomIndex)
    if (randomUser) {
      this.selectedUser.set(randomUser)
    }
  }
}
