import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroCompoment4Component } from './meu-primeiro-compoment4.component';

describe('MeuPrimeiroCompoment4Component', () => {
  let component: MeuPrimeiroCompoment4Component;
  let fixture: ComponentFixture<MeuPrimeiroCompoment4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroCompoment4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuPrimeiroCompoment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
