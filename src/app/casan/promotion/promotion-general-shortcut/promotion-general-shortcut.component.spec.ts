import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PromotionGeneralShortcutComponent } from './promotion-general-shortcut.component';

describe('PromotionGeneralShortcutComponent', () => {
  let component: PromotionGeneralShortcutComponent;
  let fixture: ComponentFixture<PromotionGeneralShortcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionGeneralShortcutComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromotionGeneralShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
