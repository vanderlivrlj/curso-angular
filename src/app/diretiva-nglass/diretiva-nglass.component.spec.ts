import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNglassComponent } from './diretiva-nglass.component';

describe('NglassComponent', () => {
  let component: DiretivaNglassComponent;
  let fixture: ComponentFixture<DiretivaNglassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNglassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaNglassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
