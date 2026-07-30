import { bootstrapApplication } from '@angular/platform-browser';
import {Component } from '@angular/core'
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <h3>Null-Safe Navigation (?.)<h3>
  <button (click)="toggle()">Toggle User</button>
  <p>Email: {{user?.profile?.email || '(none)'}}</p>
  
  `
})
export class App {
  user: {profile?: {email?: string}} | undefined = undefined;
  toggle(){
    this.user = this.user ? undefined : {profile: {email: 'test@gmail.com'}};
  }
}

bootstrapApplication(App);

