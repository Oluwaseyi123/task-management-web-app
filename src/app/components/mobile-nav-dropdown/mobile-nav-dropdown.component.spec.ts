import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavDropdownComponent } from './mobile-nav-dropdown.component';

describe('MobileNavDropdownComponent', () => {
  let component: MobileNavDropdownComponent;
  let fixture: ComponentFixture<MobileNavDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNavDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
