import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinguagemPage } from './linguagem.page';

describe('LinguagemPage', () => {
  let component: LinguagemPage;
  let fixture: ComponentFixture<LinguagemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LinguagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
