import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoPerfilComponent } from './curriculo-perfil.component';

describe('CurriculoPerfilComponent', () => {
  let component: CurriculoPerfilComponent;
  let fixture: ComponentFixture<CurriculoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurriculoPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
