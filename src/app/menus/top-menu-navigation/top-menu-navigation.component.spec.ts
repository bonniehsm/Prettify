import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { 
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
} from '@angular/material';

import { SubmenuComponent } from '../submenu/submenu.component';
import { TopMenuNavigationComponent } from './top-menu-navigation.component';

describe('TopMenuNavigationComponent', () => {
  let component: TopMenuNavigationComponent;
  let fixture: ComponentFixture<TopMenuNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
      ],
      declarations: [ 
        TopMenuNavigationComponent,
        SubmenuComponent,
      ]
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
