import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chap4Page } from './chap4.page';

describe('Chap4Page', () => {
  let component: Chap4Page;
  let fixture: ComponentFixture<Chap4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chap4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
