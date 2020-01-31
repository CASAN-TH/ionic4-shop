import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoAddressComponent } from './no-address.component';

describe('NoAddressComponent', () => {
  let component: NoAddressComponent;
  let fixture: ComponentFixture<NoAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAddressComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
