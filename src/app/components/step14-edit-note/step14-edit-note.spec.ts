import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step14EditNote } from './step14-edit-note';

describe('Step14EditNote', () => {
  let component: Step14EditNote;
  let fixture: ComponentFixture<Step14EditNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step14EditNote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step14EditNote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
