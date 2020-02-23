import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageFourteenPage } from './page-fourteen.page';

describe('PageFourteenPage', () => {
  let component: PageFourteenPage;
  let fixture: ComponentFixture<PageFourteenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFourteenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageFourteenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
