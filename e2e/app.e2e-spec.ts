import { Comp900xPage } from './app.po';

describe('comp900x App', () => {
  let page: Comp900xPage;

  beforeEach(() => {
    page = new Comp900xPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
