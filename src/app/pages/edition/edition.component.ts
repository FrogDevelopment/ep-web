import {Component, OnInit} from '@angular/core';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import {NzMessageService} from 'ng-zorro-antd';
import {EditionService} from '../../services/edition/edition.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {
  juneStart = new Date();
  juneEnd = new Date();
  selectedDate: Date;
  deadline: number;

  constructor(private editionService: EditionService,
              private message: NzMessageService) {
    this.juneStart.setMonth(5);
    this.juneStart.setDate(1);
    this.juneEnd.setMonth(5);
    this.juneEnd.setDate(30);
  }

  ngOnInit() {
    this.editionService.getEdition()
    .subscribe(date => {
        this.selectedDate = new Date(date[0], date[1] - 1, date[2]);
        this.deadline = this.selectedDate.getTime();
      }
      ,
      () => this.handleError());
  }

  disabledDate(current: Date): boolean {
    return differenceInCalendarDays(this.juneStart, current) > 0
      || differenceInCalendarDays(current, this.juneEnd) > 0;
  }

  onValidate() {
    this.editionService.setEdition(this.selectedDate)
    .subscribe(
      _ => {
        this.deadline = this.selectedDate.getMilliseconds();
      }
      ,
      () => this.handleError());
  }

  private handleError(): void {
    this.message.error('Something bad happened; please try again later.');
  }

}
