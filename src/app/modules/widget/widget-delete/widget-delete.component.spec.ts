import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDeleteComponent } from './widget-delete.component';

describe('WidgetDeleteComponent', () => {
  let component: WidgetDeleteComponent;
  let fixture: ComponentFixture<WidgetDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
