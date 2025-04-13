import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string
  @Input({ required: true }) name!: string
  get ImagePath() {
    return 'assets/users/' + this.avatar
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSelectUser() {}
}
