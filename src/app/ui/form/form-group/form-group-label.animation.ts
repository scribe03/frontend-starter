import { animate, state, style, transition, trigger } from '@angular/animations';

export const labelUpDown = trigger('labelUpDown', [
    state('void', style({position: 'absolute', left: '4px', top: '-4px', fontSize: '12px'})),
    state('up', style({position: 'absolute', left: '4px', top: '-4px', fontSize: '12px'})),
    state('down', style({position: 'absolute', left: '4px', top: '6px', fontSize: '18px'})),
    transition('* => up', [
        style({position: 'absolute', left: 0, top: 0}),
        animate('0.25s linear', style({transform: 'translateY(-4px)', left: '4px', fontSize: '12px'}))
    ]),
    transition('* => down', [
        animate('0.25s linear', style({transform: 'translateY(12px)', fontSize: '18px'}))
    ])
]);
