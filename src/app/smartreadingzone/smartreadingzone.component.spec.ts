import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartreadingzoneComponent } from './smartreadingzone.component';

describe('SmartreadingzoneComponent', () => {
  let component: SmartreadingzoneComponent;
  let fixture: ComponentFixture<SmartreadingzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartreadingzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartreadingzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
