import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageElevenPage } from './page-eleven.page';

describe('PageElevenPage', () => {
  let component: PageElevenPage;
  let fixture: ComponentFixture<PageElevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageElevenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageElevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
