import { animate, state, style, transition, trigger } from '@angular/animations';

export const labelUpDown = trigger('labelUpDown', [
  state('void', style({position: 'absolute', left: 0, top: '-22px', transform: 'scale(0.7)'})),
  state('up', style({position: 'absolute', left: 0, top: '-22px', transform: 'scale(0.7)'})),
  state('down', style({position: 'absolute', left: 0, top: 0, transform: 'scale(1)'})),
  transition('* => up', [
    style({position: 'absolute', left: 0, top: 0}),
    animate('0.25s linear', style({transform: 'translateY(-22px) scale(0.7)'}))
  ]),
  transition('* => down', [
    animate('0.25s linear', style({transform: 'translateY(22px) scale(1)'}))
  ])
]);
