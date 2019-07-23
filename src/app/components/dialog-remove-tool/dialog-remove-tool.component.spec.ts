import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRemoveToolComponent } from './dialog-remove-tool.component';

describe('DialogRemoveToolComponent', () => {
  let component: DialogRemoveToolComponent;
  let fixture: ComponentFixture<DialogRemoveToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRemoveToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRemoveToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
