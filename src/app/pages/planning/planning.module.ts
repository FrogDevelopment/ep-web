import {NgModule} from '@angular/core';

import {PlanningRoutingModule} from './planning-routing.module';

import {PlanningComponent} from './planning.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [PlanningRoutingModule, NgZorroAntdModule, CommonModule],
  declarations: [PlanningComponent],
  exports: [PlanningComponent]
})
export class PlanningModule {
}
