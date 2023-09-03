import { Component, Signal, WritableSignal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemingService } from 'src/app/services/theming.service';
import { MaterialModule } from 'src/app/modules/material-module/material.module';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  isDark$!: Signal<boolean>
  theme$!: Signal<string>

  constructor(private themingService: ThemingService) {
    this.isDark$ = themingService.getIsDarkSignal()
    this.theme$ = computed(() => this.isDark$() ? 'dark' : 'light');
  }

  toggle() {
    this.themingService.toggleIsDark();
  }
}
