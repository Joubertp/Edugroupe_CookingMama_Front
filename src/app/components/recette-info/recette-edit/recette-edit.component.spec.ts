import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteEditComponent } from './recette-edit.component';

describe('RecetteEditComponent', () => {
  let component: RecetteEditComponent;
  let fixture: ComponentFixture<RecetteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
