import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelineComponent } from './wireline.component';

describe('WirelineComponent', () => {
  let component: WirelineComponent;
  let fixture: ComponentFixture<WirelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WirelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WirelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
