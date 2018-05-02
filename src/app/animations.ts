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
    animate(500)
  ]),
  transition(':leave', [
      animate(500, style({ transform: 'translateX(-100%)' }))
  ])
]);
