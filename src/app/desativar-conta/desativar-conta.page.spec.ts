import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesativarContaPage } from './desativar-conta.page';

describe('DesativarContaPage', () => {
  let component: DesativarContaPage;
  let fixture: ComponentFixture<DesativarContaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesativarContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
