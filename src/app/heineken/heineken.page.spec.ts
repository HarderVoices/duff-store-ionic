import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeinekenPage } from './heineken.page';

describe('HeinekenPage', () => {
  let component: HeinekenPage;
  let fixture: ComponentFixture<HeinekenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeinekenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeinekenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
