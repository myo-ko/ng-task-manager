import { NgTaskManagerPage } from './app.po';

describe('ng-task-manager App', () => {
  let page: NgTaskManagerPage;

  beforeEach(() => {
    page = new NgTaskManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
