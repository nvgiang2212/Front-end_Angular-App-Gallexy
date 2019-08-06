import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGallexyComponent } from './image-gallexy.component';

describe('ImageGallexyComponent', () => {
  let component: ImageGallexyComponent;
  let fixture: ComponentFixture<ImageGallexyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGallexyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGallexyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
