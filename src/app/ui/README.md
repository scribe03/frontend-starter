# Angular (+ CLI) don't support global styles for libraries

(when it will be fixed move this module to library)

https://github.com/angular/angular-cli/issues/10869

---
COMPONENT
    sc-alert
[*] sc-card
[!] sc-carousel
[!] sc-collapse
    sc-list
[!] sc-modal
[!] sc-pagination
    sc-popover
    sc-progress
[!] sc-spinner
    sc-tooltip
[!] sc-table
[!] sc-tabs
    sc-menu

FORM
sc-button (directive)
sc-input-text
sc-textarea
sc-select
sc-input-radio
sc-input-checkbox
sc-input-range
sc-input-file
    OR
sc-input-group

----

actual:

[!] sc-modal
        - overlay
        - modal-header
        - modal-body
        - modal-footer

left: 50%; top: 50%; transform: translate(-50%, -50%);
https://github.com/dsternlicht/the-ultimate-guide-for-creating-a-simple-modal-in-react-vue-angular-and-vanilla-js/blob/master/angular/src/app/app.component.ts
TemplateRef
ViewContainerRef
ComponentFactoryResolver

https://jaxenter.com/dynamically-create-component-angular-142720.html
https://coryrylan.com/blog/build-a-angular-modal-dialog-with-angular-animate

1. Dodać interface/class Modal
    show
    close
2. Dodać komponent wrapper 'sc-modal'

<my-example-modal [show]="isShow" (close)="zrobCos()">

