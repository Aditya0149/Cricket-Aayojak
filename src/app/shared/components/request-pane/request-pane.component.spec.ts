import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPaneComponent } from './request-pane.component';

describe('RequestPaneComponent', () => {
  let component: RequestPaneComponent;
  let fixture: ComponentFixture<RequestPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
