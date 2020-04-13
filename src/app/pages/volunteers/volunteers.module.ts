import { NgModule } from '@angular/core';

import { VolunteersRoutingModule } from './volunteers-routing.module';

import { VolunteersComponent } from './volunteers.component';


@NgModule({
  imports: [VolunteersRoutingModule],
  declarations: [VolunteersComponent],
  exports: [VolunteersComponent]
})
export class VolunteersModule { }
