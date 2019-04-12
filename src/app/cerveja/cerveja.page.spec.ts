import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejaPage } from './cerveja.page';

describe('CervejaPage', () => {
  let component: CervejaPage;
  let fixture: ComponentFixture<CervejaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervejaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
