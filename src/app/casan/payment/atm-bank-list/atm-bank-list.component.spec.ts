import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtmBankListComponent } from './atm-bank-list.component';

describe('AtmBankListComponent', () => {
  let component: AtmBankListComponent;
  let fixture: ComponentFixture<AtmBankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmBankListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtmBankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
