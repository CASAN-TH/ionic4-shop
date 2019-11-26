import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecificationgiftModalComponent } from './specificationgift-modal.component';

describe('SpecificationgiftModalComponent', () => {
  let component: SpecificationgiftModalComponent;
  let fixture: ComponentFixture<SpecificationgiftModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificationgiftModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificationgiftModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
