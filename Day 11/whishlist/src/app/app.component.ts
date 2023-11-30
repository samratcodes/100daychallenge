import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/whishlist';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
   (item: WishItem) => !item.isComplete,
   (item:WishItem)=>item.isComplete
  ];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Go to the store'),
    new WishItem('Get eggs', true),
    new WishItem('Get milk', false),
  ];

  listFilter: any = '0';
  newWishText = '';
  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  title = 'whishlist';
  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }
  toggleItem(iteam: WishItem) {
    iteam.isComplete = !iteam.isComplete;
    console.log(iteam);
  }
}
