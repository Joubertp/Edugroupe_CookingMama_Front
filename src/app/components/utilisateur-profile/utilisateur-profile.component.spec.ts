import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurProfileComponent } from './utilisateur-profile.component';
import { UtilisateursListComponent } from '../utilisateurs/utilisateurs-list/utilisateurs-list.component';

describe('UtilisateurProfileComponent', () => {
  let component: UtilisateurProfileComponent;
  let fixture: ComponentFixture<UtilisateurProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(UtilisateurProfileComponent)
    const utilisateurProfile = fixture.debugElement.componentInstance
    expect(utilisateurProfile).toBeTruthy();
  });
});
