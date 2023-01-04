import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuQuintoComponent } from './meu-quinto.component';

describe('MeuQuintoComponent', () => {
  let component: MeuQuintoComponent;
  let fixture: ComponentFixture<MeuQuintoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuQuintoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuQuintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
