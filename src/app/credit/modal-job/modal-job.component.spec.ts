import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalJobComponent } from './modal-job.component';

describe('ModalJobComponent', () => {
  let component: ModalJobComponent;
  let fixture: ComponentFixture<ModalJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalJobComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
