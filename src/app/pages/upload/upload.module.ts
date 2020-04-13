import { NgModule } from '@angular/core';

import { UploadRoutingModule } from './upload-routing.module';

import { UploadComponent } from './upload.component';
import {NzButtonModule, NzIconModule, NzUploadModule} from 'ng-zorro-antd';


@NgModule({
  imports: [UploadRoutingModule, NzUploadModule, NzButtonModule, NzIconModule],
  declarations: [UploadComponent],
  exports: [UploadComponent]
})
export class UploadModule { }
