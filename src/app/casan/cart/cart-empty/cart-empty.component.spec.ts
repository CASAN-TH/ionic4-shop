import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartEmptyComponent } from './cart-empty.component';

describe('CartEmptyComponent', () => {
  let component: CartEmptyComponent;
  let fixture: ComponentFixture<CartEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartEmptyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
