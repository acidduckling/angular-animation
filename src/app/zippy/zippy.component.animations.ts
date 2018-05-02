import {
  trigger,
  transition,
  state,
  style,
  animate
} from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
  state(
    'collapsed',
    style({
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    })
  ),
  transition('collapsed => expanded', [
    animate(
      '300ms ease-out',
      style({
        height: '*',
        paddingTop: '*',
        paddingBottom: '*'
      })
    ),
    animate(
      '1s ease-out',
      style({
        opacity: 1
      })
    )
  ]),
  transition('expanded => collapsed', [animate('300ms ease-in')])
]);
