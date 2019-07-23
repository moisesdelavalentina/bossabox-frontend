import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddToolComponent } from './dialog-add-tool.component';

describe('DialogAddToolComponent', () => {
  let component: DialogAddToolComponent;
  let fixture: ComponentFixture<DialogAddToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
