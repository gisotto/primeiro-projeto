import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroComponent3Component } from './meu-primeiro-component3.component';

describe('MeuPrimeiroComponent3Component', () => {
  let component: MeuPrimeiroComponent3Component;
  let fixture: ComponentFixture<MeuPrimeiroComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroComponent3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuPrimeiroComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
