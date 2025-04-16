import { Component, Input, output } from '@angular/core'

type User = {
  id: string
  avatar: string
  name: string
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User
  select = output<string>()
  get ImagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
