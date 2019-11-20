import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhonenoPage } from './phoneno.page';

describe('PhonenoPage', () => {
  let component: PhonenoPage;
  let fixture: ComponentFixture<PhonenoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonenoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhonenoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
