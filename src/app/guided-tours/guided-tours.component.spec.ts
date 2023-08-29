import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedToursComponent } from './guided-tours.component';

describe('GuidedToursComponent', () => {
  let component: GuidedToursComponent;
  let fixture: ComponentFixture<GuidedToursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidedToursComponent]
    });
    fixture = TestBed.createComponent(GuidedToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
