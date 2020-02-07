import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleTagComponent } from './role-tag.component';

describe('RoleTagComponent', () => {
  let component: RoleTagComponent;
  let fixture: ComponentFixture<RoleTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
