import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestwijmoComponent } from './testwijmo.component';

describe('TestwijmoComponent', () => {
  let component: TestwijmoComponent;
  let fixture: ComponentFixture<TestwijmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestwijmoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestwijmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
