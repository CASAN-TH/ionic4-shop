import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductCardPage } from './product-card.page';

describe('ProductCardPage', () => {
  let component: ProductCardPage;
  let fixture: ComponentFixture<ProductCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
