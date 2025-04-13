import { Component, Input, output } from '@angular/core'

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) id!: string
  @Input({ required: true }) avatar!: string
  @Input({ required: true }) name!: string

  select = output<string>()
  get ImagePath() {
    return 'assets/users/' + this.avatar
  }

  onSelectUser() {
    this.select.emit(this.id)
  }
}
