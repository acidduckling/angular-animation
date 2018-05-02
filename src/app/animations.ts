import {
  trigger,
  state,
  transition,
  animate,
  style
} from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate(2000)]) // void <=> *
]);

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)' }),
    animate('500ms ease-out')
  ]),
  transition(':leave', [
      animate('500ms ease-in', style({ transform: 'translateX(-100%)' }))
  ])
]);
