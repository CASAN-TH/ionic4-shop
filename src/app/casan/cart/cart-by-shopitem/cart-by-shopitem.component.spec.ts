import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartByShopitemComponent } from './cart-by-shopitem.component';

describe('CartByShopitemComponent', () => {
  let component: CartByShopitemComponent;
  let fixture: ComponentFixture<CartByShopitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartByShopitemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartByShopitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
