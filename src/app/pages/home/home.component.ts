import { Component, Signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material-module/material.module';
import { EasyPanelComponent } from 'src/app/components/easy-panel/easy-panel.component';
import { ThemeSwitcherComponent } from 'src/app/components/theme-switcher/theme-switcher.component';
import { ThemingService } from 'src/app/services/theming.service';
import { MatDialog } from '@angular/material/dialog';
import { SampleDialogComponent } from 'src/app/components/sample-dialog/sample-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    EasyPanelComponent,
    ThemeSwitcherComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isDark$!: Signal<boolean>

  constructor(private themingService: ThemingService,
              private dialog: MatDialog) {
    this.isDark$ = this.themingService.getIsDarkSignal()
    effect(() => {
      console.log(`Mode: ${this.isDark$()}`)
    })
  }

  openDialog() {
    this.dialog.open(SampleDialogComponent)
  }

}
