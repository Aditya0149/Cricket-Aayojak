import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentPaneComponent } from './tournament-pane.component';

describe('TournamentPaneComponent', () => {
  let component: TournamentPaneComponent;
  let fixture: ComponentFixture<TournamentPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
