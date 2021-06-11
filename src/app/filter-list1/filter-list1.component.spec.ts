import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterList1Component } from './filter-list1.component';

describe('FilterList1Component', () => {
  let component: FilterList1Component;
  let fixture: ComponentFixture<FilterList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterList1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
