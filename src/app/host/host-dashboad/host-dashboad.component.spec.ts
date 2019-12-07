import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDashboadComponent } from './host-dashboad.component';

describe('HostDashboadComponent', () => {
  let component: HostDashboadComponent;
  let fixture: ComponentFixture<HostDashboadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostDashboadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
