import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {  
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
} from '@angular/material';
import { ShopComponent } from './shop.component';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
      ],
      declarations: [ ShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
