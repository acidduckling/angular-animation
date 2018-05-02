import {
  trigger,
  state,
  transition,
  animate,
  style,
  keyframes
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
    animate(
      '500ms ease-in',
      keyframes([
        style({
          offset: 0.2,
          opacity: 1,
          transform: 'translateX(20px)'
        }),
        style({
          offset: 1,
          opacity: 0,
          transform: 'translateX(-100%)'
        })
      ])
    )
  ])
]);
