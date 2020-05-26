import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenusComponent } from './sub-menus.component';

describe('SubMenusComponent', () => {
  let component: SubMenusComponent;
  let fixture: ComponentFixture<SubMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
