import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillModalComponent } from './bill-modal.component';

describe('BillModalComponent', () => {
  let component: BillModalComponent;
  let fixture: ComponentFixture<BillModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
