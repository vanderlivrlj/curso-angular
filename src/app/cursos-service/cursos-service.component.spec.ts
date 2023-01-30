import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosServiceComponent } from './cursos-service.component';

describe('CursosServiceComponent', () => {
  let component: CursosServiceComponent;
  let fixture: ComponentFixture<CursosServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
