import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Item = { id: number; name: string };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>TrackBy with *ngFor</h3>
    <button (click)="shuffle()">Shuffle</button>
    <ul>
      <li *ngFor="let it of items; trackBy: trackById">{{ it.id }} - {{ it.name }}</li>
    </ul>
  `
})
export class App {
  items: Item[] = [
    { id: 1, name: 'Alpha' },
    { id: 2, name: 'Beta' },
    { id: 3, name: 'Gamma' }
  ];
  shuffle(){ this.items = [...this.items].reverse(); }
  trackById(_i: number, it: Item){ return it.id; }
}

bootstrapApplication(App);