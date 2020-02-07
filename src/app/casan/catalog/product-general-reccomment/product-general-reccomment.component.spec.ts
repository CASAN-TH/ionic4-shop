import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductGeneralReccommentComponent } from './product-general-reccomment.component';

describe('ProductGeneralReccommentComponent', () => {
  let component: ProductGeneralReccommentComponent;
  let fixture: ComponentFixture<ProductGeneralReccommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGeneralReccommentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductGeneralReccommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
