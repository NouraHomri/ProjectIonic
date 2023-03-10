import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PointsPage } from './points.page';

describe('PointsPage', () => {
  let component: PointsPage;
  let fixture: ComponentFixture<PointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
