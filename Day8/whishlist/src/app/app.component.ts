import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/whishlist';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    // new WishItem('Go to the store'),
    // new WishItem('Get eggs', true),
    // new WishItem('Get milk', false),
  ];
  newWishText = '';
  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  title = 'whishlist';

  toggleItem(iteam: WishItem) {
    iteam.isComplete = !iteam.isComplete;
    console.log(iteam);
  }
}
