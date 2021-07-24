import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoepleListComponent } from './poeple-list.component';

describe('PoepleListComponent', () => {
  let component: PoepleListComponent;
  let fixture: ComponentFixture<PoepleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoepleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoepleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
