import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyPageComponent } from './fantasy-page.component';

describe('FantasyPageComponent', () => {
  let component: FantasyPageComponent;
  let fixture: ComponentFixture<FantasyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantasyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
