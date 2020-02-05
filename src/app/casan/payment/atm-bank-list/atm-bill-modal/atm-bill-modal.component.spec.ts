import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtmBillModalComponent } from './atm-bill-modal.component';

describe('AtmBillModalComponent', () => {
  let component: AtmBillModalComponent;
  let fixture: ComponentFixture<AtmBillModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmBillModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtmBillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
