/*
 * @Repo: https://github.com/nghoney/markdown-site-template 
 * @Author: Edward https://github.com/crazybber 
 * @Date: 2020-05-25 19:39:45 
 * @Last Modified by: Edward 
 * @Last Modified time: 2020-05-25 19:39:45 
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
