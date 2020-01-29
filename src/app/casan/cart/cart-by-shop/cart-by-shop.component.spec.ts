import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartByShopComponent } from './cart-by-shop.component';

describe('CartByShopComponent', () => {
  let component: CartByShopComponent;
  let fixture: ComponentFixture<CartByShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartByShopComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartByShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
