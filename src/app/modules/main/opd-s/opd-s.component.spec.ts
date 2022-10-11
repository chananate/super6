import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdSComponent } from './opd-s.component';

describe('OpdSComponent', () => {
  let component: OpdSComponent;
  let fixture: ComponentFixture<OpdSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
