import { Component, Input } from '@angular/core'

import { DUMMY_USERS } from '../dummy-users'

@Component({
  selector: 'app-user-data',
  imports: [],
  templateUrl: './user-data.component.html',
})
export class UserDataComponent {
  @Input({ required: true }) id: string | undefined
  get name() {
    return DUMMY_USERS.find((user) => user.id === this.id)?.name
  }
}
