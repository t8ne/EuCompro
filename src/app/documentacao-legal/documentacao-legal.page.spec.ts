import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentacaoLegalPage } from './documentacao-legal.page';

describe('DocumentacaoLegalPage', () => {
  let component: DocumentacaoLegalPage;
  let fixture: ComponentFixture<DocumentacaoLegalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentacaoLegalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
