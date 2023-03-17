import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IWantOneComponent } from './i-want-one.component';

describe('IWantOneComponent', () => {
  let component: IWantOneComponent;
  let fixture: ComponentFixture<IWantOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IWantOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IWantOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
