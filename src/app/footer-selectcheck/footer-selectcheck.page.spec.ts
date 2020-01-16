import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterSelectcheckPage } from './footer-selectcheck.page';

describe('FooterSelectcheckPage', () => {
  let component: FooterSelectcheckPage;
  let fixture: ComponentFixture<FooterSelectcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSelectcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterSelectcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
