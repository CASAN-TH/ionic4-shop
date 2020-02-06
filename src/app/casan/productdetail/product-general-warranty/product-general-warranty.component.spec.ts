import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductGeneralWarrantyComponent } from './product-general-warranty.component';

describe('ProductGeneralWarrantyComponent', () => {
  let component: ProductGeneralWarrantyComponent;
  let fixture: ComponentFixture<ProductGeneralWarrantyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGeneralWarrantyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductGeneralWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
