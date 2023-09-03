import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyPanelComponent } from './easy-panel.component';

describe('EasyPanelComponent', () => {
  let component: EasyPanelComponent;
  let fixture: ComponentFixture<EasyPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EasyPanelComponent]
    });
    fixture = TestBed.createComponent(EasyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
