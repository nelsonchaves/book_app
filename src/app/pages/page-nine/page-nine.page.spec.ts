import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageNinePage } from './page-nine.page';

describe('PageNinePage', () => {
  let component: PageNinePage;
  let fixture: ComponentFixture<PageNinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageNinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
