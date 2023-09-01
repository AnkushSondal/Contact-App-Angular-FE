import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNavbarComponent } from './contact-navbar.component';

describe('ContactNavbarComponent', () => {
  let component: ContactNavbarComponent;
  let fixture: ComponentFixture<ContactNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactNavbarComponent]
    });
    fixture = TestBed.createComponent(ContactNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
