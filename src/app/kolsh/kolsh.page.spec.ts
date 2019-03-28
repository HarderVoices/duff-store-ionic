import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KolshPage } from './kolsh.page';

describe('KolshPage', () => {
  let component: KolshPage;
  let fixture: ComponentFixture<KolshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolshPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
