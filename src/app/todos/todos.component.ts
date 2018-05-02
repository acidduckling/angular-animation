import { Component } from '@angular/core';
import {
  trigger,
  state,
  transition,
  animate,
  style,
  keyframes,
  query
} from '@angular/animations';
import {
  fade,
  slide,
  bouncOutLeftAnimation,
  fadeInAnimation
} from '../animations';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        query('h1', [style({ transform: 'translateY(-20px)' }), animate(1000)])
      ])
    ]),

    trigger('todoAnimation', [
      transition(
        ':enter',
        useAnimation(fadeInAnimation, { params: { duration: '500ms' } })
      ),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bouncOutLeftAnimation)
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'
  ];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event) {
    console.log($event);
  }
  animationDone($event) {
    console.log($event);
  }
}
