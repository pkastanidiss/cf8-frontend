import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step12CreateNote } from './step12-create-note';

describe('Step12CreateNote', () => {
  let component: Step12CreateNote;
  let fixture: ComponentFixture<Step12CreateNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step12CreateNote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step12CreateNote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
