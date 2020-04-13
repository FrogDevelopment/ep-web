import {Component, OnInit} from '@angular/core';
import {PlanningService} from '../../services/planning/planning.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {Timetable} from '../../services/planning/Timetable';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  providers: [PlanningService],
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  data: Timetable[] = [];
  loading = false;

  constructor(private planningService: PlanningService,
              private message: NzMessageService,
              private modalService: NzModalService) {
  }

  ngOnInit() {
    this.planningService.getTimetables()
    .subscribe(
      timetables => {
        this.data = timetables;
      },
      () => this.handleError());
  }

  private handleError(): void {
    this.loading = false;
    this.message.error('Something bad happened; please try again later.');
  }
}
