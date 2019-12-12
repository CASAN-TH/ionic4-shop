import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CateProductListPage } from './cate-product-list.page';

describe('CateProductListPage', () => {
  let component: CateProductListPage;
  let fixture: ComponentFixture<CateProductListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateProductListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CateProductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
