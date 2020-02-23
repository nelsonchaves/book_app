import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chap2Page } from './chap2.page';

describe('Chap2Page', () => {
  let component: Chap2Page;
  let fixture: ComponentFixture<Chap2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chap2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
