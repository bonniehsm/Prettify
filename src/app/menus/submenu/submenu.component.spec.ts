import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { 
  MatListModule,
} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from '../../product.service';
import { SubmenuComponent } from './submenu.component';

describe('SubmenuComponent', () => {
  let component: SubmenuComponent;
  let fixture: ComponentFixture<SubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatListModule,
        RouterTestingModule,
        HttpClientModule,
      ],
      declarations: [ SubmenuComponent ],
      providers: [ ProductService, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
