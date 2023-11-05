import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvComponent } from './nv.component';

describe('NvComponent', () => {
  let component: NvComponent;
  let fixture: ComponentFixture<NvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NvComponent]
    });
    fixture = TestBed.createComponent(NvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
