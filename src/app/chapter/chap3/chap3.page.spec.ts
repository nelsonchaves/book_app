import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chap3Page } from './chap3.page';

describe('Chap3Page', () => {
  let component: Chap3Page;
  let fixture: ComponentFixture<Chap3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chap3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
