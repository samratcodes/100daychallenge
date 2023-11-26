import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/whishlist';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items:WishItem[] = [
    // new WishItem('Go to the store'),
    // new WishItem('Get eggs', false),
    // new WishItem('Get milk', false),
  ];
  title = 'whishlist';
}
