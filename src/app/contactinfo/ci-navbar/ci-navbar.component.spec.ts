import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiNavbarComponent } from './ci-navbar.component';

describe('CiNavbarComponent', () => {
  let component: CiNavbarComponent;
  let fixture: ComponentFixture<CiNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiNavbarComponent]
    });
    fixture = TestBed.createComponent(CiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
