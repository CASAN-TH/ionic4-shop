import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectcheckPage } from './selectcheck.page';

describe('SelectcheckPage', () => {
  let component: SelectcheckPage;
  let fixture: ComponentFixture<SelectcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
