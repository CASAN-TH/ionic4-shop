import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CounterPaymentModalComponent } from './counter-payment-modal.component';

describe('CounterPaymentModalComponent', () => {
  let component: CounterPaymentModalComponent;
  let fixture: ComponentFixture<CounterPaymentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterPaymentModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterPaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
