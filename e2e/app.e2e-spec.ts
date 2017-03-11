import { YearCalendarPage } from './app.po';

describe('year-calendar App', () => {
  let page: YearCalendarPage;

  beforeEach(() => {
    page = new YearCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
