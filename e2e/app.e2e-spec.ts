import { TrubetAppPage } from './app.po';

describe('trubet-app App', function() {
  let page: TrubetAppPage;

  beforeEach(() => {
    page = new TrubetAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
