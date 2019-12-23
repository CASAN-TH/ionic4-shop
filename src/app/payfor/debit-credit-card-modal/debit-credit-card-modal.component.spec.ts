import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DebitCreditCardModalComponent } from './debit-credit-card-modal.component';

describe('DebitCreditCardModalComponent', () => {
  let component: DebitCreditCardModalComponent;
  let fixture: ComponentFixture<DebitCreditCardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitCreditCardModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DebitCreditCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
