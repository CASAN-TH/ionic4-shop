import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CashBackComponent } from './cash-back.component';

describe('CashBackComponent', () => {
  let component: CashBackComponent;
  let fixture: ComponentFixture<CashBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashBackComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CashBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
