import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { 
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SubmenuComponent } from '../submenu/submenu.component';
import { TopMenuNavigationComponent } from './top-menu-navigation.component';
import { AppComponent } from '../../app.component';

describe('TopMenuNavigationComponent', () => {
  let component: TopMenuNavigationComponent;
  let fixture: ComponentFixture<TopMenuNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
      ],
      declarations: [ 
        TopMenuNavigationComponent,
        SubmenuComponent,
        AppComponent,
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
