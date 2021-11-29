import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestflexboxComponent } from './testflexbox.component';

describe('TestflexboxComponent', () => {
  let component: TestflexboxComponent;
  let fixture: ComponentFixture<TestflexboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestflexboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestflexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
