import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { 
  MatListModule,
} from '@angular/material';
import { SubmenuComponent } from './submenu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SubmenuComponent', () => {
  let component: SubmenuComponent;
  let fixture: ComponentFixture<SubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatListModule,
        RouterTestingModule,
      ],
      declarations: [ SubmenuComponent ]
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
