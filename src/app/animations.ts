import {
  trigger,
  state,
  transition,
  animate,
  style,
  keyframes,
  animation,
  useAnimation
} from '@angular/animations';

export let bouncOutLeftAnimation = animation(
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
);

export let fadeInAnimation = animation(
  [style({ opacity: 0 }), animate('{{ duration }} {{ easing }}')],
  { params: { duration: '2s', easing: 'ease-out' } }
);

export let fadeOutAnimation = animation([animate(2000, style({ opacity: 0 }))]);

export let fade = trigger('fade', [
  transition(':enter', useAnimation(fadeInAnimation)),
  transition(':leave', useAnimation(fadeOutAnimation))
]);

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)' }),
    animate('500ms ease-out')
  ]),
  transition(':leave', useAnimation(bouncOutLeftAnimation))
]);
