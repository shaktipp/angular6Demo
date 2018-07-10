import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathOperationComponent } from './math-operation.component';

describe('MathOperationComponent', () => {
  let component: MathOperationComponent;
  let fixture: ComponentFixture<MathOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
