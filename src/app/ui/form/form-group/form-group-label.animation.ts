import { animate, state, style, transition, trigger } from '@angular/animations';

export const labelUpDown = trigger('labelUpDown', [
    state('void', style({position: 'absolute', left: 0, top: '-20px', transform: 'scale(0.8)'})),
    state('up', style({position: 'absolute', left: 0, top: '-20px', transform: 'scale(0.8)'})),
    state('down', style({position: 'absolute', left: '2px', top: '4px', transform: 'scale(1)'})),
    transition('* => up', [
        style({position: 'absolute', left: 0, top: 0}),
        animate('0.25s linear', style({transform: 'translateY(-20px) scale(0.8)'}))
    ]),
    transition('* => down', [
        animate('0.25s linear', style({transform: 'translateY(18px) scale(1)'}))
    ])
]);
