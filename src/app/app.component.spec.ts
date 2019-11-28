import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {  
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { TopMenuNavigationComponent } from './menus/top-menu-navigation/top-menu-navigation.component';
import { SubmenuComponent } from './menus/submenu/submenu.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
      ],
      declarations: [
        AppComponent,
        TopMenuNavigationComponent,
        SubmenuComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as brand 'Prettify'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.brand).toEqual('Prettify');
  });

  // it('should render brand', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('Prettify app is running!');
  // });
});
