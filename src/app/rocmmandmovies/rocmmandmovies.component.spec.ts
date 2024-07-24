import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocmmandmoviesComponent } from './rocmmandmovies.component';

describe('RocmmandmoviesComponent', () => {
  let component: RocmmandmoviesComponent;
  let fixture: ComponentFixture<RocmmandmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RocmmandmoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocmmandmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
