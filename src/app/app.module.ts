import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { TasksComponent } from './tasks/tasks.component'
import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [AppComponent], // for non-standalone components
  bootstrap: [AppComponent],
  imports: [HeaderComponent, UserComponent, TasksComponent, BrowserModule], // for standalone components
})
export class AppModule {}
