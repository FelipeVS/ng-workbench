import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdvancedDropdownComponent } from './ng-advanced-dropdown.component';

describe('NgAdvancedDropdownComponent', () => {
  let component: NgAdvancedDropdownComponent;
  let fixture: ComponentFixture<NgAdvancedDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAdvancedDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAdvancedDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
