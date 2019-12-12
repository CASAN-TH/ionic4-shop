import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductListBlockPage } from './product-list-block.page';

describe('ProductListBlockPage', () => {
  let component: ProductListBlockPage;
  let fixture: ComponentFixture<ProductListBlockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListBlockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListBlockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
