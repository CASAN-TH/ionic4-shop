import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImformationspecgiftModalComponent } from './imformationspecgift-modal.component';

describe('ImformationspecgiftModalComponent', () => {
  let component: ImformationspecgiftModalComponent;
  let fixture: ComponentFixture<ImformationspecgiftModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImformationspecgiftModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImformationspecgiftModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
