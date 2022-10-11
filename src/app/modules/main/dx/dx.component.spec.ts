import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxComponent } from './dx.component';

describe('DxComponent', () => {
  let component: DxComponent;
  let fixture: ComponentFixture<DxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
