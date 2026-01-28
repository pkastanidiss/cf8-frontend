import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step10UserLogin } from './user-login';

describe('Step10UserLogin', () => {
  let component: Step10UserLogin;
  let fixture: ComponentFixture<Step10UserLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step10UserLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step10UserLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
