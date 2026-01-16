import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step13NotesList } from './step13-notes-list';

describe('Step13NotesList', () => {
  let component: Step13NotesList;
  let fixture: ComponentFixture<Step13NotesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step13NotesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step13NotesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
