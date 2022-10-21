import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreferComponent } from './brefer.component';

describe('BreferComponent', () => {
  let component: BreferComponent;
  let fixture: ComponentFixture<BreferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
