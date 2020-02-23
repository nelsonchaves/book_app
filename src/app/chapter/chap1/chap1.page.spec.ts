import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chap1Page } from './chap1.page';

describe('Chap1Page', () => {
  let component: Chap1Page;
  let fixture: ComponentFixture<Chap1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chap1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
