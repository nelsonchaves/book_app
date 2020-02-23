import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageTwelvePage } from './page-twelve.page';

describe('PageTwelvePage', () => {
  let component: PageTwelvePage;
  let fixture: ComponentFixture<PageTwelvePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTwelvePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageTwelvePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
