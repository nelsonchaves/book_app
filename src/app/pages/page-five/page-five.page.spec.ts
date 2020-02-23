import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageFivePage } from './page-five.page';

describe('PageFivePage', () => {
  let component: PageFivePage;
  let fixture: ComponentFixture<PageFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
