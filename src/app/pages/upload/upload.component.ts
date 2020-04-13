import {Component} from '@angular/core';
import {NzMessageService, UploadChangeParam} from 'ng-zorro-antd';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  uploadUrl = `${environment.baseUrl}/xls`;

  constructor(private msg: NzMessageService) {
  }

  handleChange({file, fileList}: UploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

}
