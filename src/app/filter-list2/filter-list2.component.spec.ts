import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterList2Component } from './filter-list2.component';

describe('FilterList2Component', () => {
  let component: FilterList2Component;
  let fixture: ComponentFixture<FilterList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterList2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
