import { Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event'])
    toggleOpen(eventData: Event) {
        this.isOpen = this.elemRef.nativeElement.contains(event?.target);
    }

    constructor(private elemRef: ElementRef) {}
}
