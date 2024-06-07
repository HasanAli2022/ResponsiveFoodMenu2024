import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'menuAPP';
  foodmenu = [
    {
      id: 1,
      name: 'دجاج',
      price: 30,
      description: 'دجاج مشوي على الفحم',
      img: '/assets/images/1.jpg',
    },
    {
      id: 2,
      name: 'دجاج',
      price: 30,
      description: 'دجاج شواية ',
      img: '/assets/images/2.jpg',
    },
    {
      id: 3,
      name: 'ايدام',
      price: 20,
      description: 'ايدام خضار مشكل',
      img: '/assets/images/3.jpg',
    },
    {
      id: 4,
      name: 'ايدام',
      price: 20,
      description: 'ايدام  بالدجاج على الفرن',
      img: '/assets/images/2.jpg',
    },
  ];

  totalprice: number = 0;
  quantity: number = 0;

  sum(event: any, price: number) {
    const ischecked: boolean = event?.target.checked;
    if (ischecked) {
      this.totalprice += price;
      this.quantity += 1;
    } else {
      this.totalprice -= price;
      this.quantity -= 1;
    }
  }

  foodname: string = '';

  find(foods: any[]) {
    return foods.filter((food) => food.name.includes(this.foodname));
  }
}
