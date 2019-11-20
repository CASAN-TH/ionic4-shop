import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotifyPage } from './notify.page';

describe('NotifyPage', () => {
  let component: NotifyPage;
  let fixture: ComponentFixture<NotifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
