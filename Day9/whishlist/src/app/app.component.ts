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
    new WishItem('Go to the store'),
    new WishItem('Get eggs', true),
    new WishItem('Get milk', false),
  ];

  visibleItems : WishItem[] = this.items;
  listFilter: String = '0';
  newWishText = '';
  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

    filterChange(value:any) {
if(value === '0'){
  this.visibleItems = this.items;
}else if(value === '1'){
  this.visibleItems = this.items.filter(item => !item.isComplete);
}
else{
  this.visibleItems = this.items.filter(item => item.isComplete);
}
}


  title = 'whishlist';

  toggleItem(iteam: WishItem) {
    iteam.isComplete = !iteam.isComplete;
    console.log(iteam);
  }
}
