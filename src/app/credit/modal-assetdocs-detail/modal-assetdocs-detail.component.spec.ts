import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAssetdocsDetailComponent } from './modal-assetdocs-detail.component';

describe('ModalAssetdocsDetailComponent', () => {
  let component: ModalAssetdocsDetailComponent;
  let fixture: ComponentFixture<ModalAssetdocsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAssetdocsDetailComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAssetdocsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
