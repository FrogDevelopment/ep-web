import {NgModule} from '@angular/core';

import {EditionRoutingModule} from './edition-routing.module';

import {EditionComponent} from './edition.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [EditionRoutingModule, NgZorroAntdModule, FormsModule],
  declarations: [EditionComponent],
  exports: [EditionComponent]
})
export class EditionModule {
}
