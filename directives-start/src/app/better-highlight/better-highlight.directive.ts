import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'yellow';
  @Input('appBetterHighlight') highlightColor: string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor=this.defaultColor;
  }
}
