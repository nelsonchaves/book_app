import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageEightPage } from './page-eight.page';

describe('PageEightPage', () => {
  let component: PageEightPage;
  let fixture: ComponentFixture<PageEightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageEightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
