import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageFifteenPage } from './page-fifteen.page';

describe('PageFifteenPage', () => {
  let component: PageFifteenPage;
  let fixture: ComponentFixture<PageFifteenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFifteenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageFifteenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
