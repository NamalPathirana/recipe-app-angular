import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click',['$event']) onToggle(event:Event){
    this.isOpen = this.elementRef.nativeElement.contains(event.target)?!this.isOpen:false;
  }

  constructor(private elementRef:ElementRef) {}

  // my solution
  // constructor(private elementRef:ElementRef) {}
  //
  // @HostListener('click') mouseclick(event:Event){
  //   let elementClasses: string[] = this.elementRef.nativeElement.className;
  //   let menuIsOpen = elementClasses.includes('open');
  //
  //   if(menuIsOpen){
  //     this.elementRef.nativeElement.className='dropdown'
  //   }else{
  //     this.elementRef.nativeElement.className='dropdown open'
  //   }
  // }

}
