import { Component, computed, input } from '@angular/core'

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string
  // @Input({ required: true }) name!: string
  avatar = input.required<string>()
  name = input.required<string>()
  private readonly computeImagePath = () => 'assets/users/' + this.avatar()
  ImagePath = computed(this.computeImagePath)

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSelectUser() {}
}
