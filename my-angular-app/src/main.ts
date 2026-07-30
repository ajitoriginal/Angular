import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h3>Template statements and $event</h3>
    <button (click)="count = count + 1">Increment</button>
    <input placeholder="Type" (input)="text = $any($event.target).value" [value]="text" />
    <p>Count: {{ count }}</p>
    <p>Text: {{ text || '(empty)' }}</p>
  `
})
export class App {
  count = 0;
  text = '';
}

bootstrapApplication(App);