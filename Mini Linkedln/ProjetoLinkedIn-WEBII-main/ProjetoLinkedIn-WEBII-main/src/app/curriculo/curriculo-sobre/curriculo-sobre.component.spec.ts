import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoSobreComponent } from './curriculo-sobre.component';

describe('CurriculoSobreComponent', () => {
  let component: CurriculoSobreComponent;
  let fixture: ComponentFixture<CurriculoSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurriculoSobreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculoSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});