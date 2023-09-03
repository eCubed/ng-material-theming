import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material-module/material.module';

@Component({
  selector: 'app-sample-dialog',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './sample-dialog.component.html',
  styleUrls: ['./sample-dialog.component.scss']
})
export class SampleDialogComponent {

}
