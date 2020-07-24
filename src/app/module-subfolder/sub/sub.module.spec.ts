import {async, TestBed} from '@angular/core/testing';
import {SubModule} from './sub.module';

describe('SubModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SubModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SubModule).toBeDefined();
  });
});
