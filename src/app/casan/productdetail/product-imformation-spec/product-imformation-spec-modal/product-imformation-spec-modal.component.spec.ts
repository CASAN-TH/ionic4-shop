import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductImformationSpecModalComponent } from './product-imformation-spec-modal.component';

describe('ProductImformationSpecModalComponent', () => {
  let component: ProductImformationSpecModalComponent;
  let fixture: ComponentFixture<ProductImformationSpecModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductImformationSpecModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductImformationSpecModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
