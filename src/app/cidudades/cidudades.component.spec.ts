import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidudadesComponent } from './cidudades.component';

describe('CidudadesComponent', () => {
  let component: CidudadesComponent;
  let fixture: ComponentFixture<CidudadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidudadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
