import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageSixPage } from './page-six.page';

describe('PageSixPage', () => {
  let component: PageSixPage;
  let fixture: ComponentFixture<PageSixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
