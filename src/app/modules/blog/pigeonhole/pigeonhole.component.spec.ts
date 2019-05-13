import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigeonholeComponent } from './pigeonhole.component';

describe('PigeonholeComponent', () => {
  let component: PigeonholeComponent;
  let fixture: ComponentFixture<PigeonholeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigeonholeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigeonholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
