import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaynowComponent } from './paynow.component';

describe('PaynowComponent', () => {
  let component: PaynowComponent;
  let fixture: ComponentFixture<PaynowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaynowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
