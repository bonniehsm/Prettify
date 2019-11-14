import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuNavigationComponent } from './top-menu-navigation.component';

describe('TopMenuNavigationComponent', () => {
  let component: TopMenuNavigationComponent;
  let fixture: ComponentFixture<TopMenuNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenuNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
