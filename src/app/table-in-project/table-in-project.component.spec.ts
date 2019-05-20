import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInProjectComponent } from './table-in-project.component';

describe('TableInProjectComponent', () => {
  let component: TableInProjectComponent;
  let fixture: ComponentFixture<TableInProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableInProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
