import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllContactinfoComponent } from './view-all-contactinfo.component';

describe('ViewAllContactinfoComponent', () => {
  let component: ViewAllContactinfoComponent;
  let fixture: ComponentFixture<ViewAllContactinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllContactinfoComponent]
    });
    fixture = TestBed.createComponent(ViewAllContactinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
