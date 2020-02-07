import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuGeneralSelectCheckComponent } from './menu-general-select-check.component';

describe('MenuGeneralSelectCheckComponent', () => {
  let component: MenuGeneralSelectCheckComponent;
  let fixture: ComponentFixture<MenuGeneralSelectCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGeneralSelectCheckComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuGeneralSelectCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
