import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chap5Page } from './chap5.page';

describe('Chap5Page', () => {
  let component: Chap5Page;
  let fixture: ComponentFixture<Chap5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chap5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
