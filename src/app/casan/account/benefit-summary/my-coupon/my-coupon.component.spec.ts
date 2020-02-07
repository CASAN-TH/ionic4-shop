import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCouponComponent } from './my-coupon.component';

describe('MyCouponComponent', () => {
  let component: MyCouponComponent;
  let fixture: ComponentFixture<MyCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCouponComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
