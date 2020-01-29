import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TotalcartComponent } from './totalcart.component';

describe('TotalcartComponent', () => {
  let component: TotalcartComponent;
  let fixture: ComponentFixture<TotalcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalcartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TotalcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
