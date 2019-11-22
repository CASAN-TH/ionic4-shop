import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarrantygiftModalComponent } from './warrantygift-modal.component';

describe('WarrantygiftModalComponent', () => {
  let component: WarrantygiftModalComponent;
  let fixture: ComponentFixture<WarrantygiftModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantygiftModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarrantygiftModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
