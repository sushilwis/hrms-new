// import { Component, OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  Input
} from "@angular/core";
import {
  NgbCalendar,
  NgbDateParserFormatter,
  NgbDateStruct
} from "@ng-bootstrap/ng-bootstrap";
import { ColorPickerService, Rgba } from "ngx-color-picker";

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one &&
  two &&
  two.year === one.year &&
  two.month === one.month &&
  two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two
    ? false
    : one.year === two.year
    ? one.month === two.month
      ? one.day === two.day
        ? false
        : one.day < two.day
      : one.month < two.month
    : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two
    ? false
    : one.year === two.year
    ? one.month === two.month
      ? one.day === two.day
        ? false
        : one.day > two.day
      : one.month > two.month
    : one.year > two.year;

const now = new Date();

export class Cmyk {
  constructor(
    public c: number,
    public m: number,
    public y: number,
    public k: number
  ) {}
}

import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarEventAction,
  CalendarDateFormatter,
  DateFormatterParams
} from "angular-calendar";

import { Subject } from "rxjs/Subject";

import {
  startOfDay,
  endOfDay,
  subDays,
  endOfMonth,
  addHours,
  addDays,
  isSameMonth,
  isSameDay
} from "date-fns";

import "rxjs/add/observable/of";
import "rxjs/add/operator/filter";

export const colors: any = {
  red: {
    primary: "#e74a25",
    secondary: "#FAE3E3"
  },
  blue: {
    primary: "#00bbd9",
    secondary: "#D1E8FF"
  },
  yellow: {
    primary: "#e3bc08",
    secondary: "#FDF1BA"
  },
  green: {
    primary: "#2ecc71",
    secondary: "#b1fdcf"
  }
};

@Component({
  selector: "app-leave-application",
  templateUrl: "./leave-application.component.html",
  styleUrls: [
    "./leave-application.component.scss",
    "../../../../../node_modules/angular-calendar/css/angular-calendar.css",
    "../../../../assets/icon/icofont/css/icofont.scss"
  ],
  encapsulation: ViewEncapsulation.None
  //   changeDetection: ChangeDetectionStrategy.OnPush,
  //   providers: [
  //     {
  //       provide: CalendarDateFormatter,
  //       useClass:
  //     }
  //   ]
})
export class LeaveApplicationComponent implements OnInit {
  arrows: any;

  public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, { weekday: "short" }).format(date);
  }

  public rows = [
    { leaves: "Personal Leave" },
    { leaves: "Casual Leave" },
    { leaves: "Sick Leave" },
    { leaves: "Personal Leave" }
  ];

  items = [];
  public view = "month";
  viewDate: Date = new Date();
  isChecked = true;
  public colorOption = ["red", "blue", "yellow", "green"];

  public actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
      }
    }
  ];

  externalEvents: CalendarEvent[] = [
    {
      title: "My Event One",
      color: colors.yellow,
      start: new Date(),
      end: new Date(),
      draggable: true,
      actions: this.actions
    },
    {
      title: "My Event Two",
      color: colors.blue,
      start: new Date(),
      end: new Date(),
      draggable: true,
      actions: this.actions
    },
    {
      title: "My Event Three",
      color: colors.blue,
      start: new Date(),
      end: new Date(),
      draggable: true,
      actions: this.actions
    },
    {
      title: "My Event Four",
      color: colors.blue,
      start: new Date(),
      end: new Date(),
      draggable: true,
      actions: this.actions
    }
  ];

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: "A 3 day event",
      color: colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      title: "An event with no end date",
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: "A long event that spans 2 months",
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: "A draggable and resizable event",
      color: colors.green,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];
  public activeDayIsOpen = true;
  refresh: Subject<any> = new Subject();

  eventDropped({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    const externalIndex: number = this.externalEvents.indexOf(event);
    if (externalIndex > -1) {
      if (!this.isChecked) {
        this.externalEvents.splice(externalIndex, 1);
      }
      console.log(event);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    this.viewDate = newStart;
    this.activeDayIsOpen = true;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  public model: any;
  modelCustomDay: any;

  displayMonths = 4;
  navigation = "label";
  showWeekNumbers = false;

  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  disabled = true;

  @Input() testRangeDate: Date;

  toggle = false;
  public lastColor: string;
  public rgbaText: string;

  public color = "#2889e9";
  public color2 = "hsla(300,82%,52%)";
  public color3 = "#fff500";
  public color4 = "rgb(236,64,64)";
  public color5 = "rgba(45,208,45,1)";

  public color13 = "rgba(0, 255, 0, 0.5)";
  public color14 = "rgb(0, 255, 255)";
  public color15 = "#a51ad633";

  public basicColor = "#4099ff";
  public showColorCode = "#db968d";
  public showColorCodeHSAL = "hsl(149,27%,65%)";
  public showColorCodeRGBA = "rgb(221,14,190)";
  public changeMeColor = "#523698";

  public arrayColors: any = {};
  public selectedColor = "color";

  modelPopup: NgbDateStruct;
  public date: { year: number; month: number };

  modelDisabled: NgbDateStruct = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  };

  public cmyk: Cmyk = new Cmyk(0, 0, 0, 0);

  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  constructor(
    public parserFormatter: NgbDateParserFormatter,
    public calendar: NgbCalendar,
    public cpService: ColorPickerService
  ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), "d", 10);

    this.arrayColors["color"] = "#2883e9";
    this.arrayColors["color2"] = "#e920e9";
    this.arrayColors["color3"] = "rgb(255,245,0)";
    this.arrayColors["color4"] = "rgb(236,64,64)";
    this.arrayColors["color5"] = "rgba(45,208,45,1)";

    const windowWidth = window.innerWidth;
    if (windowWidth >= 768 && windowWidth <= 1024) {
      this.displayMonths = 2;
      this.navigation = "select";
    } else if (windowWidth < 768) {
      this.displayMonths = 1;
      this.navigation = "select";
    } else {
      this.displayMonths = 1;
      this.navigation = "none";
    }
  }

  ngOnInit() {}

  onAdd(event) {
    const color = this.colorOption[
      Math.floor(Math.random() * this.colorOption.length)
    ];
    this.externalEvents.push({
      title: event.value,
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors[color],
      draggable: true,
      actions: this.actions
    });
    this.refresh.next();
  }

  setEvent() {
    this.isChecked = !this.isChecked;
  }

  lookup(date) {
    for (let i = 0, len = this.externalEvents.length; i < len; i++) {
      if (this.externalEvents[i] === date) {
        return true;
      }
    }
    return false;
  }

  selectToday() {
    this.modelPopup = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    };
  }

  onDateChange(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered = date =>
    this.fromDate &&
    !this.toDate &&
    this.hoveredDate &&
    after(date, this.fromDate) &&
    before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

  onChangeColor(color: string): Cmyk {
    return this.rgbaToCmyk(
      this.cpService.hsvaToRgba(this.cpService.stringToHsva(color))
    );
  }

  rgbaToCmyk(rgba: Rgba): Cmyk {
    const cmyk: Cmyk = new Cmyk(0, 0, 0, 0);
    let k: number;
    k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
    if (k === 1) {
      return new Cmyk(0, 0, 0, 1);
    }
    cmyk.c = (1 - rgba.r - k) / (1 - k);
    cmyk.m = (1 - rgba.g - k) / (1 - k);
    cmyk.y = (1 - rgba.b - k) / (1 - k);
    cmyk.k = k;
    return cmyk;
  }

  onChangeColorHex8(color: string): string {
    return this.cpService.outputFormat(
      this.cpService.stringToHsva(color, true),
      "rgba",
      null
    );
  }
}
