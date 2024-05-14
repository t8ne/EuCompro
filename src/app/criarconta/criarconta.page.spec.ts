import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarcontaPage } from './criarconta.page';

describe('CriarcontaPage', () => {
  let component: CriarcontaPage;
  let fixture: ComponentFixture<CriarcontaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarcontaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
