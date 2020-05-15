import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightzoneComponent } from './highlightzone.component';

describe('HighlightzoneComponent', () => {
  let component: HighlightzoneComponent;
  let fixture: ComponentFixture<HighlightzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
