import {
  Directive,
  HostBinding,
  Inject,
  Input,
  OnInit,
  OnDestroy
} from "@angular/core";

import { AccordionDirective } from "./accordion.directive";

@Directive({
  selector: "[appAccordionLink]"
})
export class AccordionLinkDirective implements OnInit, OnDestroy {
  @Input()
  public group: any;

  @HostBinding("class.pcoded-trigger")
  @Input()
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this._open = value;
    /*for slimscroll on and off*/
    let cl = document.querySelector(".pcoded-inner-navbar");

    if (cl) {
      cl.classList.toggle("scroll-sidebar");
    }

    if (value) {
      this.nav.closeOtherLinks(this);
    }
  }

  protected _open: boolean;
  protected nav: AccordionDirective;

  constructor(@Inject(AccordionDirective) nav: AccordionDirective) {
    this.nav = nav;
  }

  ngOnInit(): any {
    this.nav.addLink(this);
  }

  ngOnDestroy(): any {
    this.nav.removeGroup(this);
  }

  toggle(): any {
    /*for slimscroll on and off*/
    let pin = document.querySelector(".pcoded-inner-navbar");

    if (pin) {
      pin.classList.add("scroll-sidebar");
    }

    this.open = !this.open;
  }
}
