import {Component, OnInit} from '@angular/core';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import {PlanningService} from '../../services/planning/planning.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {
  juneStart = new Date();
  juneEnd = new Date();
  selectedDate: Date;

  constructor(private planningService: PlanningService,
              private message: NzMessageService) {
    this.juneStart.setMonth(5);
    this.juneStart.setDate(1);
    this.juneEnd.setMonth(5);
    this.juneEnd.setDate(30);
  }

  ngOnInit() {
    this.planningService.getEdition()
    .subscribe(date => {
        this.selectedDate = date;
      }
      ,
      () => this.handleError());
  }


  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(this.juneStart, current) > 0
      || differenceInCalendarDays(current, this.juneEnd) > 0;
  };

  onValidate() {
    this.planningService.setEdition(this.selectedDate)
    .subscribe(
      _ => {
      }
      ,
      () => this.handleError());
  }

  private handleError(): void {
    this.message.error('Something bad happened; please try again later.');
  }

}
