import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TcoingiftModalComponent } from './tcoingift-modal.component';

describe('TcoingiftModalComponent', () => {
  let component: TcoingiftModalComponent;
  let fixture: ComponentFixture<TcoingiftModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcoingiftModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TcoingiftModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
